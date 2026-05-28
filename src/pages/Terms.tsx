import { motion } from 'motion/react';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mx-auto shadow-sm">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tight font-display">
              Terms & <span className="text-brand-teal">Conditions</span>
            </h1>
            <p className="text-slate-500 font-medium">Last Updated: May 2025</p>
          </div>

          <div className="bg-slate-50 rounded-[48px] p-8 md:p-16 border border-slate-100 shadow-sm space-y-12">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">INDIA'S FIRST IMMUNITY CHALLENGE FOR SMARTER BREATHING</h2>
              
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                By participating in "India's First Immunity Challenge for Smarter Breathing" (hereinafter referred to as "the Challenge"), you ("the Participant") acknowledge, understand, and agree to be bound by the following Terms and Conditions. Please read them carefully before proceeding with registration and payment.
              </p>

              <div className="space-y-10">
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">1. Acceptance of Terms</h3>
                  <p className="text-slate-600">1.1. Your registration for and participation in the Challenge signifies your unconditional acceptance of these Terms and Conditions, as they may be amended from time to time by Tech Atriocare Pvt. Ltd. ("the Company").</p>
                  <p className="text-slate-600 mt-2">1.2. The Company reserves the right to modify or update these Terms and Conditions at any time without prior notice. Continued participation after any such changes shall constitute your consent to such changes.</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">2. Eligibility and Registration</h3>
                  <p className="text-slate-600">2.1. The Challenge is open to individuals residing in India who are e.g., 18 years or older at the time of registration.</p>
                  <p className="text-slate-600 mt-2">2.2. To register, Participants must:</p>
                  <ul className="list-none ml-6 mt-2 text-slate-600 space-y-2">
                    <li>a. Complete the Google Form provided.</li>
                    <li>b. Successfully make the required payment for participation.</li>
                    <li>c. Upon successful payment, Participants will be redirected to the Haal-Chaal Pravartak's WhatsApp chat.</li>
                    <li>d. Initiate contact by sending a "Hi" message, then send "Okay" as prompted.</li>
                  </ul>
                  <p className="text-slate-600 mt-2">2.3. The Company reserves the right to refuse registration or disqualify any Participant at its sole discretion if it believes the Participant does not meet eligibility criteria or has violated these Terms.</p>
                  <p className="text-slate-600 mt-2">2.4. No company members or related are allowed participating in the contest.</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">3. Challenge Period</h3>
                  <p className="text-slate-600">3.1. The Challenge will run for a period of seven (7) consecutive days starting from the date of the Participant's successful enrollment and initiation of the WhatsApp chat protocol.</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">4. Challenge Activities and Adherence</h3>
                  <p className="text-slate-600">4.1. Humming Voice Notes: Participants are required to send voice notes of 7 seconds humming, two (2) audios per slot, three (3) times a day, within the following time windows:</p>
                  <ul className="list-none ml-6 mt-2 text-slate-600 space-y-1">
                    <li>a. 9:00 AM - 11:00 AM IST</li>
                    <li>b. 2:00 PM - 4:00 PM IST</li>
                    <li>c. 9:00 PM - 11:00 PM IST</li>
                  </ul>
                  <p className="text-slate-600 mt-4">4.2. Self-Assessment Wellness Questionnaire: Participants will receive a daily self-assessment wellness questionnaire, which must be completed and submitted daily.</p>
                  <p className="text-slate-600 mt-2">4.3. Daily Video Submission: Participants are required to create and submit one (1) video per day, detailing their feelings, or providing a review of the Company's technology, formulation, the Challenge itself, or all of the above.</p>
                  <p className="text-slate-600 mt-2">a. Videos can be shared on any social media platform, tagging the Company, or directly shared via the WhatsApp chat if the Participant is not comfortable with public sharing.</p>
                  <p className="text-slate-600 mt-2">4.4. Adherence Scoring: Non-adherence to the requirements for voice notes and the daily questionnaire will result in a reduction of the Participant's overall score.</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">5. Scoring and Winner Selection</h3>
                  <p className="text-slate-600">5.1. Winners will be announced based on a final scoring system derived from four (4) key parameters:</p>
                  <ul className="list-none ml-6 mt-2 text-slate-600 space-y-1">
                    <li>a. Adherence: Based on timely and complete submission of voice notes.</li>
                    <li>b. Video Submissions: Quality, consistency, and content of daily videos.</li>
                    <li>c. Self-Assessment Wellness Questionnaire: Consistency and completion of daily questionnaires.</li>
                    <li>d. Change in Airway Patency Score: Measured in a lesser time (details of measurement methodology will be provided separately).</li>
                  </ul>
                  <p className="text-slate-600 mt-4">5.2. The Company's decision on scoring and winner selection is final and binding. No correspondence will be entered into regarding the results.</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">6. Prizes and Referrals</h3>
                  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4">6.1. Participant Prizes:</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex justify-between"><span>Level 1 (First place)</span> <span className="font-black text-brand-teal">INR 50,000</span></li>
                        <li className="flex justify-between"><span>Level 2 (Next 10)</span> <span className="font-bold">INR 1,500 each</span></li>
                        <li className="flex justify-between"><span>Level 3 (Next 20)</span> <span className="font-bold">INR 1,000 each</span></li>
                        <li className="flex justify-between"><span>Level 4 (Next 30)</span> <span className="font-bold">INR 500 each</span></li>
                      </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-slate-100">
                      <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4">6.2. Referral Prizes:</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex justify-between"><span>Level 1 Referral</span> <span className="font-bold">INR 5,000</span></li>
                        <li className="flex justify-between"><span>Level 2 Referrals</span> <span className="font-bold">INR 200 each</span></li>
                        <li className="flex justify-between"><span>Level 3 Referrals</span> <span className="font-bold">INR 100 each</span></li>
                      </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                       <p>6.3. All prize amounts are subject to applicable taxes and deductions as per Indian law. Winners will be responsible for any tax liabilities arising from their prize.</p>
                       <p>6.4. Prizes are non-transferable and non-exchangeable. The Company reserves the right to substitute prizes with items of equal or greater value if advertised prizes become unavailable.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">7. Disqualification</h3>
                  <p className="text-slate-600">7.1. Participants may be disqualified from the Challenge at the Company's sole discretion for, but not limited to, the following reasons:</p>
                  <ul className="list-none ml-6 mt-2 text-slate-600 space-y-1">
                    <li>a. Submitting another person's voice notes or any other content as their own.</li>
                    <li>b. Engaging in any activity intended to disturb, harass, or disadvantage other participants.</li>
                    <li>c. Using any unfair means or fraudulent practices to gain an advantage.</li>
                    <li>d. Violation of any of these Terms and Conditions.</li>
                  </ul>
                  <p className="text-slate-600 mt-4">7.2. Disqualified Participants will forfeit any rights to prizes or recognition.</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">8. Intellectual Property and Data Usage</h3>
                  <p className="text-slate-600">8.1. By participating, you grant the Company a worldwide, royalty-free, perpetual, irrevocable, non-exclusive license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display all content (including but not limited to voice notes, videos, questionnaire responses, feedback, and reviews) submitted by you for the Challenge, in any media, for promotional, marketing, research, or other business purposes related to the Challenge or the Company's products and services, without further compensation or notification to you.</p>
                  <p className="text-slate-600 mt-2">8.2. You affirm that you own or have the necessary licenses, rights, consents, and permissions to publish the content you submit.</p>
                  <p className="text-slate-600 mt-2">8.3. The Company will collect and process personal data provided by Participants in accordance with its Privacy Policy. By participating, you consent to such data collection and processing.</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">9. Disclaimers and Limitation of Liability</h3>
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8 space-y-6 text-sm text-amber-900">
                    <p><strong>9.1. NO MEDICAL ADVICE:</strong> The Challenge and its components are intended for general wellness purposes only. They are not intended to be a substitute for professional medical advice, diagnosis, or treatment. Participants should always consult with a qualified healthcare professional before starting any new health regimen.</p>
                    <p><strong>9.2. NO GUARANTEE OF RESULTS:</strong> The Company makes no representations or warranties, express or implied, regarding the effectiveness, safety, or results of participating in the Challenge. Individual results may vary significantly.</p>
                    <p><strong>9.3. TECHNICAL ISSUES & INTERRUPTIONS:</strong> The Company shall not be liable for losses caused by: a. Technical failures, internet outages, etc. b. Delays in data transmission. c. Errors in Google Form, WhatsApp, etc. d. Viruses, bugs, or unauthorized intervention.</p>
                    <p><strong>9.4. PARTICIPANT'S RESPONSIBILITY:</strong> Participants are solely responsible for: a. Ensuring device/connection adequacy. b. Account confidentiality. c. Content accuracy of submissions. d. Adherence to all guidelines.</p>
                    <p><strong>9.5. RELEASE AND INDEMNIFICATION:</strong> By participating, you hereby release, discharge, and hold harmless the Company from any and all claims, demands, liabilities, suits, actions, causes of action, losses, costs, and expenses.</p>
                    <p><strong>9.6. LIMITATION OF LIABILITY:</strong> In no event shall the Company be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages. The Company's total cumulative liability to you for any and all claims shall not exceed the amount paid by you to participate in the Challenge.</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">10. Governing Law & Jurisdiction</h3>
                  <p className="text-slate-600">10.1. These Terms and Conditions shall be governed by and construed in accordance with the laws of India.</p>
                  <p className="text-slate-600 mt-2">10.2. Any disputes arising out of or in connection with the Challenge or these Terms shall be subject to the exclusive jurisdiction of the courts located in Delhi.</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">11. Severability</h3>
                  <p className="text-slate-600">11.1. If any provision of these Terms is found to be invalid or unenforceable, such provision shall be severed from the remainder of these Terms, which will otherwise remain in full force and effect.</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">12. Entire Agreement</h3>
                  <p className="text-slate-600">12.1. These Terms and Conditions constitute the entire agreement between the Participant and the Company concerning the Challenge and supersede all prior or contemporaneous communications, representations, or agreements, whether oral or written.</p>
                </section>

                <section className="pt-12 border-t border-slate-200">
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4 font-display">Contact Information</h4>
                  <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">Tech Atriocare Pvt. Ltd.</p>
                  <p className="text-slate-500 text-sm leading-relaxed mt-2">
                    Krastay, Saidulajab, Saiyad Ul Ajaib Village, Sainik Farm, New Delhi, Delhi 110030<br />
                    <span className="text-brand-teal font-bold">service.techatriocare@gmail.com</span>
                  </p>
                </section>
              </div>
            </div>

            <div className="pt-8 flex flex-col items-center gap-6">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfebqYEWS4uKAd-61QfPpMom-bg8aPCaOZQ7pZ-fV4MWx5ZrQ/viewform"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-teal text-white rounded-full font-black uppercase tracking-widest shadow-xl shadow-brand-teal/20 hover:scale-105 transition-all group"
              >
                Agree & Participate <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
              </a>
              <Link to="/haal-chaal" className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-brand-teal transition-colors">
                Back to Challenge Page
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
