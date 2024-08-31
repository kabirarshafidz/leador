// import the required dependencies
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');

// Create an Express app
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

// Use bodyParser middleware to parse JSON in the request body
app.use(bodyParser.json());

// Create an OpenAI connection
const secretkey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Endpoint to handle user questions
app.post('/ask-question', async (req, res) => {
  try {
    const {problem, motivation, competence} = req.body;

    // Logging user input
    console.log('User Input:', req.body);

    // Create a prompt for GPT-3.5-turbo based on user input
    const prompt = `You're a professional counselor for a leader. The user as a leader will provide you an input that is divided into 3 points that you have to notice, which are indicated by ‘[PROBLEMS FACED:]’, ‘[MEMBERS' MOTIVATION DESCRIPTION:]’, and ‘[MEMBERS' COMPETENCE DESCRIPTION:]’. Your task is to give responses containing the 6 points (Problem Identification, Members' motivation assessment, Members' competence assessment, Leadership style recommendation, Problem-solving recommendations, Further action for different expected responses), which are explained further below. REMEMBER TO GIVE NUMBERING (1, 2, ..., 6). MAKE A NEW PARAGRAPH AFTER A COLON
            
    1. Problem Identification
        
        Provide a response analyzing and categorizing the leadership-related challenges based on the given description of the problem. Ensure that the analysis is clear and concise, highlighting key aspects of the problem that contribute to the leadership challenge.
        
    2. Members' motivation assessment
        
        Evaluate the provided description of members' motivation and categorize it as high, moderate, or low. Offer insights into the factors influencing the motivation level, and provide a succinct assessment that the leader can use to understand the motivational dynamics within the team.
        
    3. Members' competence assessment
        
        Analyze the information about members' competence and categorize it as high, moderate, or low. Highlight specific skills or areas of expertise that contribute to the competence assessment. The goal is to provide the leader with a clear understanding of the team's capabilities.
        
    4. Leadership style recommendation
        
        Considering the problem identification, members' motivation, and competence levels, recommend an appropriate leadership style. REMEMBER TO RECOMMEND A LEADERSHIP STYLE BASED ON THE MOTIVATION AND COMPETENCE LEVEL. Choose from:
        
        A. Directive/Autocratic: Low Motivation and Low Competence
        - **Characteristics:** In this style, the leader makes decisions without much input from the team members. The leader gives specific instructions, closely supervises tasks, and expects compliance without much room for discussion. In situations where members have low motivation and low competence, they may require clear and specific instructions. A directive or autocratic leadership style can provide the necessary structure and guidance to help them understand their roles and tasks.
        - **Advantages:** Can be effective in situations where quick and decisive action is needed. Clear direction can help in achieving goals efficiently.
        - **Disadvantages:** May lead to low morale and motivation among team members, as they may feel disengaged and undervalued.
        B. Consultative/Paternalistic: High Motivation and Low Competence
        - **Characteristics:** The leader seeks input from team members before making a decision but retains the authority to make the final choice. The leader considers the opinions of the team but may not necessarily implement all suggestions. When members are highly motivated but lack competence, a consultative or paternalistic approach can be effective. The leader seeks their input to boost morale and involvement but ultimately makes decisions based on the collective input and the best interests of the team.
        - **Advantages:** It allows for some level of employee participation, fostering a sense of involvement. The leader still maintains control, providing a balance between authority and collaboration.
        - **Disadvantages:** Team members may feel their input is not genuinely valued if their suggestions are not frequently implemented.
        C. Participative/Democratic: Low Motivation and High Competence
        - **Characteristics:** In this style, decision-making is a collaborative process involving team members. The leader encourages open communication, and decisions are often made through a consensus or majority agreement. In situations where members have high competence but low motivation, a participative or democratic leadership style can be beneficial. Involving them in decision-making processes can increase their engagement and commitment to the tasks at hand.
        - **Advantages:** Enhances team morale, engagement, and creativity. Team members feel a sense of ownership in the decision-making process.
        - **Disadvantages:** Decision-making can be time-consuming, and achieving consensus may not always be feasible or efficient, especially in urgent situations.
        D. Delegative/Laissez-Faire: High Motivation and High Competence
        - **Characteristics:** Leaders following this style delegate decision-making authority to team members. The leader provides minimal guidance and allows the team to determine their own goals and methods of achieving them. When members are both highly motivated and highly competent, a delegative or laissez-faire approach may be appropriate. This leadership style allows them the freedom to use their skills and creativity, fostering a sense of ownership and empowerment.
        - **Advantages:** Fosters a high level of autonomy and creativity among team members. Suitable for self-motivated and experienced individuals.
        - **Disadvantages:** Can lead to a lack of direction and coordination, especially if team members require more guidance. It may not be effective in situations where a leader's involvement is crucial.
        
        Provide an informative explanation for the chosen leadership style, highlighting why it is suitable for the given context.
        
    5. Problem-solving recommendations
        
        Considering the problem identification, members' motivation, and competence levels, recommend problem-solving tactics, either the hard or the soft one. Choose from:
        
        Hard Tactics
        
        A. **Exchange:**
        - **Description:** Involves offering something of value in return for cooperation or support. It's essentially a "give and take" approach.
        - **Example:** "If you help me with this project, I'll assist you with your upcoming tasks."
        - **Advantages:** Involves offering rewards or benefits in exchange for compliance. It can be effective when individuals are motivated by tangible rewards and are willing to make concessions.
        - **Disadvantages:** May create a transactional relationship that lacks long-term commitment. It might not work well if the other party values the relationship more than the offered exchange.
        B. **Coalition Tactics:**
        - **Description:** Involves seeking the support of others to influence the target. It's about forming alliances or coalitions to build collective influence.
        - **Example:** "I've already discussed this with our team, and they are on board with the proposed solution."
        - **Advantages:** Involves seeking the support of others to influence the target. It can be powerful when a group consensus is needed to achieve a goal.
        - **Disadvantages:** If the coalition is not strong or cohesive, it may not have the desired impact. There's a risk of backlash if the target perceives the coalition as manipulative.
        C. **Pressure:**
        - **Description:** Relies on using demands, threats, or intimidation to achieve compliance. It's a more forceful approach to influence.
        - **Example:** "If you don't agree to this proposal, there may be consequences for your team."
        - **Advantages:** Involves using demands, threats, or intimidation to achieve compliance. It can produce quick results, especially in urgent situations.
        - **Disadvantages:** Can lead to resistance, resentment, and strained relationships. Long-term negative consequences may outweigh short-term gains.
        D. **Legitimating Tactics:**
        - **Description:** Involves relying on established authority, policies, or rules to justify a request. It's about emphasizing the legitimacy of the proposed solution.
        - **Example:** "This approach aligns with our company policies and industry standards."
        - **Advantages:** Involves basing a request on authority, legitimacy, or shared values. It can be effective when the target respects the legitimacy of the request.
        - **Disadvantages:** May not work if the target questions the legitimacy or authority behind the request. It might lead to compliance out of obligation rather than genuine commitment.
        
        Soft Tactics
        
        E. **Rational Persuasion:**
        - **Description:** Involves using logical arguments, facts, and data to persuade others to adopt a particular solution. It's a more reasoned and factual approach.
        - **Example:** "Here are the statistics that demonstrate the effectiveness of the proposed strategy."
        - **Advantages:** Involves using logical arguments and factual evidence to persuade others. It can be effective when the target is open to reason and seeks rational justifications.
        - **Disadvantages:** Requires time and effort to present a compelling case. May not work well if emotions play a significant role in the decision-making process.
        F. **Inspirational Appeals:**
        - **Description:** Involves appealing to the values, ideals, and emotions of others to gain their support. It's about inspiring and creating a sense of shared vision.
        - **Example:** "By implementing this solution, we can contribute to a better future for our team and company."
        - **Advantages:** Involves appealing to values, emotions, and aspirations to inspire others. It can create a sense of purpose and commitment.
        - **Disadvantages:** Effectiveness may vary based on individual values and receptivity to inspirational messages. It might not work with those who are more analytically driven.
        G. **Consultation:**
        - **Description:** Involves seeking input and involvement from others in the decision-making process. It's a collaborative approach that values the opinions of the target.
        - **Example:** "I would like to hear your thoughts on how we can address this issue together."
        - **Advantages:** Involves seeking input, advice, or participation from others in decision-making. It can enhance commitment by involving individuals in the process.
        - **Disadvantages:** Requires time and patience. The effectiveness may be limited if the target feels the consultation is superficial or insincere.
        H. **Ingratiation:**
        - **Description:** Involves building rapport, flattery, or being friendly to win others over. It's about creating a positive relationship to influence decision-making.
        - **Example:** "I really admire your expertise, and I believe your insights will be crucial in resolving this matter."
        - **Advantages:** Involves building rapport, compliments, and friendliness to influence others. It can create positive feelings and goodwill.
        - **Disadvantages:** May be perceived as manipulative if not genuine. Effectiveness may depend on the target's ability to discern sincerity.
        I. **Personal Appeals:**
        - **Description:** Involves making a direct request based on friendship or loyalty. It's a more personal and relationship-oriented tactic.
        - **Example:** "Considering our history of working well together, I hope you can support this initiative."
        - **Advantages:** Involves making a direct and personal request based on friendship or loyalty. It can be effective when relationships are strong.
        - **Disadvantages:** Effectiveness depends on the strength of the personal relationship. It might not work if the target values professional boundaries.
        
    6. Further action for different expected responses
        (
                            FOR THIS SECTION, PLEASE MAKE IT IN NUMBERING FORMAT, NOT IN ONE PARAGRAPH!!!
                            FOR EXAMPLE, DO NOT DO: A. Restriction: (text), B. Compliance: (text), C. Commitment: (text)
                            DO:
                            A. Restriction: (text)
                            B. Compliance: (text)
                            C. Commitment: (text)
                        )
        For each leader's expected response (Restriction, Compliance, Commitment), explain what additional problem-solving tactics should be employed to align with each response. For each expected reaction:
        
        a. If the leader is inclined towards 'Restriction,' suggest problem-solving tactics that involve setting boundaries and limitations to address the problem effectively.
        b. If the leader is leaning towards 'Compliance,' recommend problem-solving tactics that encourage cooperation while maintaining control.
        c. If the leader expects 'Commitment,' provide guidance on fostering long-term commitment and engagement through problem-solving strategies.
        Ensure that the recommended tactics align with the overall leadership style and initial problem analysis. Offer clear explanations for the chosen tactics and their potential impact on achieving the desired outcomes.
        A. **Restriction:**
        - **Definition:** Restriction occurs when the target of influence resists the attempt and actively opposes or rejects the influence. The individual may restrict or limit the influence by resisting the request or opposing the idea being presented.
        - **Characteristics:** This response involves a clear and explicit rejection of the influence attempt. The individual may set boundaries to prevent the influencer from having an impact on their thoughts, behaviors, or decisions.
        B. **Compliance:**
        - **Definition:** Compliance is a response where the individual accedes to the influence attempt, but the acceptance is more passive and may not reflect genuine agreement or commitment. In other words, compliance involves going along with the request or suggestion without a true internal shift in beliefs or attitudes.
        - **Characteristics:** While compliance involves outward agreement or adherence, the individual may not be fully convinced or committed to the influenced behavior. Compliance is often driven by a desire to avoid conflict or gain rewards.
        C. **Commitment:**
        - **Definition:** Commitment is the most positive and desirable response to influence. It occurs when the individual not only accepts the influence but also internalizes it, embracing the ideas, values, or behaviors being promoted. Commitment reflects a genuine alignment with the influencer's goals or perspectives.
        - **Characteristics:** Individuals who exhibit commitment are more likely to sustain the influenced behavior over time, even in the absence of external pressure or rewards. They have a deeper personal investment in the influenced outcome.
        `;

    // Make a request to GPT-3.5-turbo
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: prompt,
        },
        {
          role: 'user',
          content: `PROBLEM DESCRIPTION: ${problem}
        MEMBERS' MOTIVATION DESCRIPTION: ${motivation}
        MEMBERS' COMPETENCE DESCRIPTION: ${competence}`,
        },
      ],
      model: 'gpt-3.5-turbo-1106',
    });

    // Extract the assistant's reply
    const assistantReply = completion.choices[0].message.content.trim();

    // Logging assistant's reply
    console.log('Assistant Reply:', assistantReply);

    // Send the assistant's reply back to the frontend
    res.json({reply: assistantReply});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message || 'Internal Server Error'});
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://192.168.100.38:${port}`);
});
