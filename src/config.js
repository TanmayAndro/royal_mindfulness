Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.login_button_name = "Login";
exports.register_button_name = "Register";
exports.google_heading_name = "Sign up with Google";
exports.facebook_heading_name = "Sign up with Facebook";
exports.email_heading_name = "Sign up with email";
exports.or_heading_name = "or";

exports.urlGetValidations = "profile/validations";
exports.validationApiContentType = "application/json";
exports.validationApiMethodType = "GET";
exports.loginAPiEndPoint = "login/login";
exports.loginAPiMethod = "POST";
exports.loginApiContentType = "application/json";

exports.errorEmailNotValid = "Email not valid.";
exports.errorPasswordNotValid = "Password not valid.";
exports.placeHolderEmail = "Your Email";
exports.placeHolderPassword = "Your Password";
exports.labelHeader = "The reason we require login";
exports.btnTxtLogin = "LOG IN";
exports.labelRememberMe = "Remember me";
exports.labelOr = "OR";
exports.labelTitle = "Log in";
exports.labelTitleSignUp = "Sign up";
exports.forgotPassword = "Forgot password?";
exports.haveAccount = "Don't have an account?";
exports.btnTxtSocialLogin = "LOGIN WITH SOCIAL MEDIA";
exports.signHeadingName = "Sign up to Royal Mindfulness";
exports.welcomeHeading = "Welcome to Royal Mindfulness!";
exports.email = "Email";
exports.first_name = "First Name";
exports.last_name = "Last Name";
exports.last_name_placeholder = "Your last Name";
exports.first_name_placeholder = "Your first Name";
exports.error_msg = "enter a value";
exports.main_heading = "Royal Mindfulness";
exports.password = "Password";
exports.confirm_password = "Confirm Password";
exports.phone_no = "Phone Number";
exports.lable_already_signup = "Already have an account?";
// exports.main_heading_login='Login to Royal Mindfulness'
exports.main_heading_login = "Login to Royal Mindfulness";
exports.Select_Time = "Select Time";
//Dashboard Header
exports.Dashboard_Main_Heading = " Dashboard";
exports.Alex_Meian = "Alex Meian";
exports.Input_Placholder = 'Search for anything......';
exports.Product_Manager = "Product Manager";



//Dashboard Profile
exports.profile_email = "john.doe@example.com";
exports.Phone = "Phone";
exports.Phone_Number = "(123) 456-7890";
exports.Address = "Address";
exports.Profile_Address = "123 Main Street, Apt 4B, Springfield, IL 62701";


//Dashboard Payment history
exports.Payment_History_List = "Payment History List";
exports.Sort_By_Dates = "Sort By : Dates";
exports.Payment_Dates=  "2024-06-24";
exports.Amount_Heading = "Amount";
exports.Amount = "50.00";
exports.Payment_Method = "Payment Method";
exports.Credit_Card = "Credit Card";
exports.Transaction_Id = "Transaction ID";
exports.User_Transaction_Id = "TX123456";
exports.Status = "Status";
exports.Success = "Successful";




exports.pricingPlans = [
  {
    id: 1,
    title: "Vital Essential",
    price: "19",
    month: "Every month",
    valid: "Valid for 12 months",
    plans: [
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: false,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
    ],
  },
  {
    id: 2,
    title: "Vital Professional",
    price: "19",
    month: "Every month",
    valid: "Valid for 12 months",
    plans: [
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: false,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: false,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: false,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
    ],
  },

  {
    id: 3,
    title: "Vital Essential",
    price: "19",
    month: "Every month",
    valid: "Valid for 12 months",
    plans: [
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: false,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: false,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
      {
        id: 1,
        title: "I'm a Benefit",
        check: true,
      },
    ],
  },
];

exports.headerItem = [
  { name: "Home", link: "/" },
  { name: "Purpose", link: "/" },
  { name: "Founders", link: "/" },
  { name: "Pricing_Plans", link: "/pricing-plans" },
  { name: "Overview", link: "/" },
  
];


exports.drawerItems = [
  { name: "Home", link: "/" },
  { name: "Purpose", link: "/" },
  { name: "Founders", link: "/" },
  { name: "Pricing_Plans", link: "/pricing-plans" },
  { name: "Overview", link: "/" },
  { name: "About us", link: "/" },
  { name: "Contact us", link: "/contact" },
  { name: "FAQ's", link: "/faq" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms & Conditions", link: "/term-condition" },

];

//session
exports.heading = "Service Name";
exports.subHeading = "Checkout our availability and book the date and time that works for you.";
exports.filterHeading = "Filter By";
exports.droplable = "None";
exports.dropHeading = ["Location", "Session"];
exports.location = ["NewYork", "California"];
exports.session = ["1 Session", "7 Sessions", "20 Sessions"];
exports.buttonTime = [
  { start: "10 AM", end: "11 AM" },
  { start: "12 PM", end: "1 PM" },
  { start: "2 PM", end: "3 PM" },
  { start: "4 PM", end: "5 PM" },
  { start: "6 PM", end: "7 PM" },
  { start: "8 PM", end: "9 PM" }
];
exports.options = ["New York", "California"];
exports.sessionsTime = ["1 Session", "7 Session", "20 Session"];

//pricing plan label
exports.pricingPlansLabel = "Become a Vital member";
exports.btn_name = "Select";
exports.footerItem = [
  { name: "About us", link: "/" },
  { name: "Contact us", link: "/contact" },
  { name: "FAQ's", link: "/faq" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms & Conditions", link: "/term-condition" },

];



//FAQ's
exports.faqs = [
  {
    question: "What is Yoga Nidra?",
    answer:
      "Yoga Nidra, often referred to as 'yogic sleep,' is a guided meditation practice that leads to deep relaxation through conscious awareness. It involves lying down and following a set of instructions that guide the mind and body into a state of restful alertness. It is an easy and powerful tool to overcome many disorders.",
  },
  {
    question: "What are the benefits of Yoga Nidra?",
    answer:
      "Yoga Nidra offers numerous benefits, including stress reduction, improved sleep quality, enhanced mental clarity, emotional balance, and relief from anxiety and depression. It can also support healing processes and promote overall well-being.",
  },
  {
    question: "How is Yoga Nidra different from regular sleep?",
    answer:
      "Unlike regular sleep, Yoga Nidra is a state of conscious relaxation where the mind remains aware while the body is in deep rest. It involves following guided instructions and maintains a level of awareness that is not typically present in sleep.",
  },
  {
    question: "How long does a typical Yoga Nidra session last?",
    answer:
      "A typical Yoga Nidra session lasts between 45 to 60 minutes, including preparatory practice, though some sessions can be longer. The length can vary based on the guidance provided and the individual's needs.",
  },
  {
    question: "Do I need any special equipment or environment for Yoga Nidra?",
    answer:
      "No special equipment is required for Yoga Nidra. A comfortable, quiet place where you can lie down without disturbance is ideal. Some people use a yoga mat, blankets, or cushions to enhance comfort.",
  },
  {
    question: "Can beginners practice Yoga Nidra?",
    answer:
      "Yes, Yoga Nidra is suitable for beginners. The practice is guided, making it accessible to anyone regardless of their experience level with yoga or meditation.",
  },
  {
    question: "How often should I practice Yoga Nidra?",
    answer:
      "While you will feel good and relaxed after the first session of Yoga Nidra, it is recommended to practice consistently for at least 20 days to recover from any condition.",
  },
  {
    question: "Can Yoga Nidra help with insomnia or sleep disorders?",
    answer:
      "Yes, Yoga Nidra can be beneficial for those suffering from insomnia or sleep disorders. The deep relaxation and stress reduction it promotes can help improve sleep quality and aid in falling asleep more easily.",
  },
  {
    question: "Is Yoga Nidra a form of hypnosis?",
    answer:
      "While Yoga Nidra and hypnosis share similarities in guiding the mind to a relaxed state, they are different practices. Yoga Nidra focuses on achieving a state of conscious awareness and deep relaxation without the suggestive elements often present in hypnosis.",
  },
  {
    question: "Are there any contraindications for practicing Yoga Nidra?",
    answer:
      "Yoga Nidra is generally safe for most people. However, individuals with certain mental health conditions, such as severe depression or PTSD, should consult with a healthcare professional before starting the practice, as deep relaxation might bring up intense emotions or memories.",
  },
  {
    question: "What should I wear during a Yoga Nidra session?",
    answer:
      "Wear comfortable, loose-fitting natural fabric clothing that allows you to lie down and relax without restriction. Avoid tight or constrictive clothing.",
  },
  {
    question: "Can Yoga Nidra be practiced at any time of the day?",
    answer:
      "Yes, Yoga Nidra can be practiced at any time of the day. However, it is often recommended to practice it in the morning for a fresh start, or in the evening to unwind and relax after work or before bed. It can also be done during a break time.",
  },
  {
    question: "Is it normal to fall asleep during Yoga Nidra?",
    answer:
      "Yes, it's common for people to fall asleep during Yoga Nidra, especially if they are very tired. While the goal is to remain aware, falling asleep occasionally is a sign that your body needs rest.",
  },
  {
    question: "Can children practice Yoga Nidra?",
    answer:
      "Yes, children can practice Yoga Nidra. There are guided sessions specifically designed for children that use simpler language and shorter durations to keep them engaged.",
  },
  {
    question: "Can Yoga Nidra help with chronic pain?",
    answer:
      "Yes, Yoga Nidra can be beneficial for managing chronic pain. The deep relaxation and stress relief it provides can reduce pain perception and improve overall pain management.",
  },
  {
    question: "Is there a specific breathing technique used in Yoga Nidra?",
    answer:
      "While there is no specific breathing technique required, Yoga Nidra often includes guided breath awareness to help deepen relaxation. Instructions may involve observing natural breath or using specific breathing patterns.",
  },
  {
    question: "Can Yoga Nidra be combined with other yoga practices?",
    answer:
      "Yes, Yoga Nidra can be an excellent complement to other yoga practices, such as Hatha, Vinyasa, or Restorative yoga. It can be practiced at the end of a physical yoga session to deepen relaxation and integration.",
  },
  {
    question: "How does Yoga Nidra affect the brain?",
    answer:
      "Yoga Nidra promotes brain wave states similar to those experienced during deep sleep (delta waves) and deep relaxation (theta waves). This can lead to profound rest and healing, enhancing overall brain function and mental clarity.",
  },
  {
    question: "Can Yoga Nidra be used as a form of therapy?",
    answer:
      "Yes, Yoga Nidra is used therapeutically for conditions such as PTSD, anxiety, depression, and addiction recovery. It helps create a safe space for individuals to explore and release deep-seated emotions and trauma.",
  },
  {
    question:
      "Do I need to have prior meditation experience to practice Yoga Nidra?",
    answer:
      "No prior meditation experience is necessary to practice Yoga Nidra. It is designed to be accessible to everyone, regardless of their background in meditation or yoga.",
  },
  {
    question:
      "What kind of guided instructions are given during a Yoga Nidra session?",
    answer:
      "Guided instructions typically include body scan techniques, breath awareness, visualization, and affirmations (sankalpa). These instructions help guide the mind into a state of deep relaxation and awareness.",
  },
  {
    question: "How does Yoga Nidra differ from mindfulness meditation?",
    answer:
      "Yoga Nidra is a form of guided meditation that systematically leads the practitioner through stages of relaxation and awareness. Mindfulness meditation focuses on cultivating present-moment awareness and can be practiced in various postures, including sitting or walking.",
  },
  {
    question: "Can I practice Yoga Nidra if I have physical limitations?",
    answer:
      "Yes, Yoga Nidra can be practiced by individuals with physical limitations since it is typically performed lying down. Modifications can be made to ensure comfort, such as using props or adjusting the lying position.",
  },
  {
    question: "Can Yoga Nidra help improve concentration and focus?",
    answer:
      "Yes, regular practice of Yoga Nidra can improve concentration and focus by training the mind to enter a state of deep relaxation and clarity, reducing mental clutter and enhancing cognitive function.",
  },
  {
    question:
      "Are there any scientific studies supporting the benefits of Yoga Nidra?",
    answer:
      "Yes, there are numerous studies that support the benefits of Yoga Nidra, including its effectiveness in reducing stress, improving sleep, enhancing emotional regulation, and supporting mental health. Research shows that it can alter brain wave patterns and promote relaxation.",
  },
  {
    question: "How does Yoga Nidra affect the nervous system?",
    answer:
      "Yoga Nidra activates the parasympathetic nervous system, also known as the 'rest and digest' system. This helps reduce the stress response, lower heart rate, decrease blood pressure, and promote a state of calm and healing.",
  },
  {
    question:
      "What should I do if I find it difficult to relax during Yoga Nidra?",
    answer:
      "If you find it difficult to relax during Yoga Nidra, try to focus on the instructions without judgment. It can be helpful to practice regularly, as relaxation skills improve over time. Additionally, creating a comfortable and quiet environment can support deeper relaxation.",
  },
  {
    question: "Is it necessary to have a teacher or guide for Yoga Nidra?",
    answer:
      "While having a teacher or guide can be beneficial, especially for beginners, there are many high-quality audio and video recordings available that can guide you through a session.",
  },
];





exports.tacs = [
  {
    summary: "Royal mindfulness Terms of Use",
    details: `These royal mindfulness terms of use ("terms") constitute a binding agreement between you and royal mindfulness, inc. ("royal mindfulness", "we", or "us") with respect to your access to or use of the service (as defined herein). the service is offered subject to your acceptance, without modification, of all terms and conditions set forth herein.

please read these terms carefully. by clicking “i accept”, by accessing, using, or participating in the service or any portion thereof in any manner, or by purchasing any membership plan (as defined below), you: (a) acknowledge that you have read, understand, and agree to be bound by these terms and by such other terms, conditions, policies, and documents that may be incorporated herein by reference, including, without limitation, the royal mindfulness privacy policy (collectively, the “agreement”); (b) affirm that you are at least 18 years of age (or have reached the age of majority in the jurisdiction where you reside); and (c) if you are accepting these terms on behalf of a company or other organization, represent and warrant that you have the organizational and legal authority to accept these terms on such company’s or other organization’s behalf and to bind such company or organization. if you do not agree to this agreement, do not access, use, or participate in the service, or purchase any membership plan (as defined below).

these terms require the use of binding arbitration on an individual basis to resolve disputes rather than jury trials or class actions, in accordance with the terms of the arbitration; jury waiver; class action waiver section, below.

royal mindfulness may refuse access to or use of the service for noncompliance with any part of this agreement. this agreement is void where prohibited by law, and any rights to access or use the service are revoked in such jurisdictions.
`,
  },
  {
    summary: "The Service",
    details: `Royal mindfulness operates an online service through its website with a homepage at https://www.royalmindfulness.com, its subdomains and/or other websites (the “,Website”), and the Royal mindfulness mobile software application and such other mobile or desktop applications designated by Royal mindfulness for use with the service from time to time (the “App”), including all features, content, tools, applications, graphics, information, and other tools and services included on the Website or App, and including certain virtual classes that may be made available by Royal mindfulness via third party vendors (such as Zoom or such other video conferencing platforms or services as Royal mindfulness may elect to use from time to time) (collectively, the “Service”), which Service provides individual users (“Students”) and Employee Users (as defined below) the ability to connect with professional yoga teachers (“Teachers”) to obtain both group and personalized yoga instruction and training (“Trainings”). The scope of your access to the Service and any associated Trainings may be determined or otherwise limited by the terms of any applicable membership plan selected and purchased by you electronically through the Website or App (a “Membership Plan”) or, if you are an Employee User, by the Membership Plan purchased by the applicable Enterprise Purchaser (as defined below). We may modify, terminate, or replace, in whole or in part, the Service or any aspect thereof (including any classes offered through the Service) or any Membership Plan from time to time in our sole discretion and without prior notice. You should carefully review the scope and limitations of any Membership Plan prior to purchase. Certain services such as workshops or one off sessions are available for purchase outside of a Membership Plan`,
  },
  {
    summary: "Applicability",
    details: `“You” as used herein means the natural person or entity that has agreed to be bound by this Agreement, including, without limitation and as may be dictated by context, (i) Students, (ii) Teachers, and (iii) enterprises that purchase or otherwise register for access to the Service (an “Enterprise Purchaser”) on behalf of or for the benefit of that enterprise’s employees or representatives (each, an “Employee User”).

If you are a Teacher hereunder, you acknowledge that you have also entered into a separate Consultancy Services Agreement or similar agreement with Royal mindfulness governing your engagement by Royal mindfulness as a yoga instructor (the “Teacher Agreement”). In addition to all applicable terms and conditions of this Agreement, you shall continue to be bound by and shall comply with all terms and conditions of your Teacher Agreement. In the event of a conflict between the terms of these Terms and the terms of your Teacher Agreement, the terms of your Teacher Agreement shall govern, but only to the extent of the conflict.`,
  },
  {
    summary: "Changes to the agreement",
    details: `Royal mindfulness reserves the right to modify or change this Agreement and its terms, as well as any fees and other amounts charged for the Service, at any time and in its sole discretion. Any modifications or changes will be effective immediately upon posting on the App and the Website, unless otherwise specified in the updated Agreement. Your continued access to and use of the Website, the App, or the Service confirms your acceptance of this Agreement and any changes or modifications made to this Agreement. If you do not agree with any modification or change to this Agreement, your sole recourse shall be to cease all use of the Website, the App, and the Service. You should review these Terms and the Privacy Policy frequently and ensure you understand all terms, conditions, and policies applicable to your access to and use of the App, the Website, and the Service.
Please also note that these Terms may be superseded by expressly-designated legal notices or terms located on particular pages of the Website or the App. These expressly-designated legal notices or terms are incorporated into these Terms and supersede the provision(s) of these Terms in the event of any conflict.
in addition, we may need to update the app from time to time. by downloading the app, you agree that we can notify you and send such updates to your mobile device.
`,
  },
 
  {
    summary: "Assumption of Risk Release",
    details: `You understand and acknowledge that your use of the service (or, if you are an enterprise purchaser, your employee users’ use) could result in injury to you (or, if you are an enterprise purchaser, to your employee users). Some of these risks cannot be eliminated regardless of the care taken to avoid injuries. Without limiting the generality of the foregoing, you recognize and acknowledge, on your own behalf and, if you are an enterprise purchaser, on behalf of your employee users, that strenuous physical activity such as yoga, including where practiced in connection with a training, may increase the risk of various potential injuries, including but not limited to: (i) minor injuries such as scratches, bruises, and sprains; (ii) major injuries such as joint or back injuries, heart attacks, rhabdomyolysis, seizures, and concussions; and (iii) catastrophic injuries including paralysis and death. All teachers, students, and employee users should seek the advice of a physician prior to beginning any physical exercise program, including participating in any training. Do not participate in any training if you have any physical or medical condition that would prevent you from participating in the training or that creates a risk of injury to you. As between Royal Mindfulness and any participant in a training, the participant is solely responsible for determining the appropriateness of any training to the participant’s physical capabilities. If you, as a participant, feel that any training (or any portion thereof) is not safe, is not appropriate to your skill level and fitness capabilities, or otherwise poses a risk of harm to you, please do not participate in the training. If you experience faintness, dizziness, pain, or shortness of breath at any time while participating in any training, you should stop immediately. If you are in the United States and think you are having a medical or health emergency, call your health care professional or 911 immediately. You acknowledge and agree, on your own behalf and, if you are an enterprise purchaser, on behalf of your employee users, that any instruction or directions provided by a teacher during a training (including, without limitation, any poses or movements) are optional and provided by way of suggestion only, that such instruction and directions do not constitute health advice, and that if any participant follows any such instruction or directions, the participant does so at the participant’s own election and at the participant’s own risk. The service may offer, through your participation in trainings or otherwise, general health and fitness information which is designed for informational purposes only. Nothing stated or posted on the app or website, stated by any teacher, or otherwise available through the service is intended to be, and must not be taken to be, the practice of medical or professional care. You should not rely on any information available via the service as a substitute for, nor does it replace, professional medical advice, diagnosis, or treatment. If you have any concerns or questions about your health, you should always consult a physician or other health-care professional. Do not ever disregard, avoid, or delay obtaining medical or health-related advice from your health-care professional because of something you may have read on the site or received via the service. The use of any information provided on the service is solely at your own risk. You shall comply (and if you are an enterprise purchaser, you shall require that your employee users comply) at all times with any safety rules and guidelines given by Royal Mindfulness or an applicable teacher. If you are a participant in a training, you should share with your teacher details relating to your level of fitness and any medical conditions or physical limitations that may impact your ability to participate in any training. If Royal Mindfulness or any teacher determines, in its sole discretion and subjective opinion, that your participation in any training or other use of the service may pose a risk of physical harm to you, we may deny you access to the training or service until you furnish to us an opinion letter from a licensed physician, obtained at your sole cost and expense, confirming your physical fitness to undertake the training and service and addressing any specific health or safety concerns raised by Royal Mindfulness or your teacher. Notwithstanding the foregoing, however, you understand and acknowledge, on your own behalf and, if you are an enterprise purchaser, on behalf of your employee users, that any permission granted to you (or any employee user) to access the service and any training does not constitute an endorsement by Royal Mindfulness of your (or any employee user’s) fitness to participate in the service or any training and should not be interpreted as indicating an absence of risk. By accessing or using the service in any manner, including, without limitation, by purchasing access to and/or attending or viewing any class, event, activity, or other training (or, if you are an enterprise purchaser, by permitting your employee users to do any of the foregoing), you hereby acknowledge on behalf of yourself, your heirs, personal representatives and/or assigns and, if you are an enterprise purchaser, on behalf of your employee users, that there are certain inherent risks and dangers in participating in yoga, the trainings, and service. In partial consideration of your access to and participation in the service and trainings (or, if you are an enterprise purchaser, your employee users’ access to and participation in the service and trainings), you hereby (i) assume full responsibility for any and all injuries or damage suffered by you (or if you are an enterprise purchaser, to your employee users) or any third party and which are sustained, aggravated, or caused in connection with your (or, if you are an enterprise purchaser, your employee users’) use of or participation in the service or any training, (ii) release and agree to indemnify and hold harmless Royal Mindfulness, its direct and indirect parents, subsidiaries, and affiliates, and each of their respective officers, directors, members, employees, representatives, and agents, and all teachers, and each of their respective successors and assigns, from any and all responsibility, claims, actions, suits, procedures, costs, expenses, damages, and liabilities, to the fullest extent permitted by law, arising out of or in any way related to your (or if you are an enterprise purchaser, your employee users’) participation in the training or use of the service, and (iii) represent and warrant that you and, if you are an enterprise purchaser, your employee users (a) understand that participating in the training and service involves strenuous physical activity, and that you (or if you are an enterprise purchaser, your employee users) are in good health and able to engage in such activity, (b) have no medical or physical condition that may prevent you (or if you are an enterprise purchaser, any employee user) from properly using the service or participating in any training, or that would put you (or if you are an enterprise purchaser, any employee user) or anyone else in physical or medical danger, (c) have not been instructed by a physician to not participate in physical exercise or in the type or intensity of activity contemplated by the training and service, and that your physician has specifically approved of your participation in the training and service, and (d) are physically and mentally capable of participating in the training and using the service as contemplated hereunder. If you are a California resident, you hereby waive California Civil Code Section 1542, which states, “A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party.” If you are an enterprise purchaser, you understand and acknowledge that, as between you and Royal Mindfulness, you are solely responsible and liable for any access to or participation in the service, including any training, by any employee user, and for ensuring that any such employee user is aware of all relevant terms, conditions, restrictions, and risks set forth or disclosed hereunder.`,
},
  {
    summary: "Access to the service",
    details: `Subject to your compliance with these Terms, Royal mindfulness hereby grants you a personal, limited, non-exclusive, non-transferable, revocable license, solely for your personal, non-commercial use, to: (i) download and use the App only on an approved Apple or Android device owned by you (“Device”) as permitted by the applicable App Store Terms (as defined below) and in accordance with these Terms; (ii) access the Service through the App or Website on your Device or personal computer; and (iii) if you are a Student or Enterprise Purchaser, download and use, solely in connection with your (or if you are an Enterprise Purchaser, your Employee Users’) participation in an applicable Training and personal yoga practice, one copy of any written instructional materials (“Instructional Materials”) provided through the Service. All other use or disclosure of the Instructional Materials, whether by you are any other person, is strictly prohibited without the prior written consent of Royal mindfulness.

Royal mindfulness may suspend or terminate your access to the Service or any component thereof at any time and for any reason, including if Royal mindfulness determines you have violated any term or condition of these Terms (or, if you are a Teacher, any term or condition of your Teacher Agreement) or, if you are a Student or an Enterprise Purchaser, if you fail to pay any amount payable by you hereunder when due. We may modify, terminate, or replace the App, the Website, and/or the Service from time to time in our sole discretion and without prior notice.`,
  },
  {
    summary: "Access by minors",
    details: `The Service is intended for your personal use, or, if you are an Enterprise Purchaser, for the personal use of your Employee Users. If you permit any minor (i.e., any individual under the age of 18 years) to access or use the Service or participate in any Training, either in connection with your own access, use, and/or participation in the Service or any Training, or through granting such minor use of your Account (as defined below), you represent, warrant, and covenant that: (i) you are the legal guardian of such minor, or otherwise have obtained the consent and approval of such minor’s legal guardian to provide the minor with access to and use of the Service and to permit such minor to participate in the Trainings; (ii) you shall ensure (including through appropriate supervision) the safety of such minor while participating in any Training and such minor’s compliance with these Terms at all times during his or her use of the Service; (iii) you have informed such minor of the terms and conditions of these Terms, and he or she has agreed to access and use the Service, and participate in any Trainings, in strict compliance with the same; (iv) you shall be solely responsible and liable for such minor’s access to and use of the Service and participation in the Trainings, including for any injury or damage to the minor or any other person as a result of such use and/or participation; and (v) all waivers, releases, acknowledgments, and assumptions of risk made by you under these Terms, including as set forth in the Assumption of Risk; Release section above, are made both for yourself and on behalf of the applicable minor. Royal mindfulness hereby disclaims any and all liabilities arising out of usage of the Website, App, or the Service by any minor without the supervision and consent of such minor’s legal guardian.`,
  },
  {
    summary: "Registration",
    details: `In order to access or use the Service and to participate in Trainings as a Student or as a Teacher, or to permit your Employee Users to access and use the Service and participate in Trainings if you are an Enterprise Purchaser, you are required to register with us and create a user account (“Account”). To create an Account, you must submit the following information through the account registration page on the Website or the App: (i) a working email address; (ii) your first and last name; and (iii) a password. If you are a Student, we may also ask that you provide additional information so that we can provide you a more customized experience when using the Service, such as your years of yoga experience, types of yoga practiced in the past, any medical or physical conditions (such as surgeries) that might impact your ability to practice yoga, and your goals for yoga, such as to increase flexibility or achieve weight loss. You must provide true, accurate, current, and complete information as prompted by the applicable registration or login form, and you are responsible for keeping such information up to date. You may update your information by logging into your Account and making relevant changes directly or contacting us using the contact information listed in the Contact Us section below and we can make the changes for you. All personal information collected by us through this registration process will be protected and used in accordance with our Privacy Policy.

You are responsible and liable for all activities conducted through your Account, regardless of who conducts those activities. You are responsible for maintaining the confidentiality of any user IDs, passwords and other credentials associated with your Account, and shall immediately notify Royal mindfulness of any actual or suspected unauthorized access to or use of your Account or any associated user IDs, passwords, or other credentials. You will cooperate fully with Royal mindfulness and take all actions that Royal mindfulness reasonably deems necessary to maintain or enhance the security of the Service or Royal mindfulness’s computing systems and networks and your access to the Service. Royal mindfulness is not and shall not be deemed liable for any loss or damage to you arising from your failure to comply with this Section.

​​Trainings

If you are a Student or Enterprise Purchaser and have registered an Account with us, you can select from the list of Teachers that provide Training and other services via the Service. Notwithstanding the foregoing, your use of the Service and your access to Trainings is subject to any terms or restrictions of your applicable Membership Plan or any free offering made available to you by Royal mindfulness, including, without limitation, as may relate to the type and frequency of Trainings available to you. You are solely responsible for arranging the dates and times of any Training sessions (“Sessions”) with your Teachers and for rescheduling any Sessions that are canceled.

You acknowledge that all Trainings are offered on a first-come and as-available basis. Royal mindfulness is not responsible for any limitations on Session times or for your inability to access the Service (including your ability to participate in a particular Training at a particular time) due to issues of service volume and availability. If you experience difficulty finding a Training at a time that works with your schedule, please message the Royal mindfulness care team from the chat window within the App or email us at care@Royal mindfulness.com, or call us at 1+ (855) 771-2929`,
  },
  {
    summary: "Recordings",
    details: `The Service is interactive, in that it enables Students and Employee Users to connect in real-time to Teachers and for Teachers to connect with Students and Employee Users to provide the Training Sessions. These Sessions, whether one-on-one (“Private Sessions”), group training (“Workshops”), group classes (“Classes”), or group classes offered through Yoga with Friends (“YWF Classes”), are recorded for the limited purposes set forth herein (“Session Recordings”). You expressly consent on your own behalf and, if you are an Enterprise Purchaser, on behalf of your Employee Users, to be recorded in connection with the Sessions that you (or if you are an Enterprise Purchaser, your Employee Users) participate in through the Service, and to the use and disclosure of such Session Recordings as detailed herein.

Private Sessions

Session Recordings of Student Private Sessions are recorded for both the applicable Student and Teacher to refer to in developing future Session plans and yoga training, and for the Student’s personal yoga practice. Subject to the limited license granted below and any applicable restrictions or limitations set forth in the Restrictions section below, Session Recordings of Private Sessions are owned and viewable by the participating Student. If you are a Student, you hereby grant to Royal mindfulness, its Teachers, employees and other personnel a perpetual, irrevocable, fully paid-up, royalty-free, worldwide right and license to access, store, view, disclose, and otherwise use the Session Recordings of any Private Session in which you participate, for the purposes of (i) planning and providing yoga training to you, (ii) conducting Teacher training and improvement and other quality assurance and customer service and support programs, and (iii) such other purposes to which you may consent. Notwithstanding the foregoing, Royal mindfulness will not, without your consent, disclose Session Recordings of Private Sessions to Teachers other than (a) the Teacher that conducted the Private Session, and (b) other Teachers with whom you work (including, without limitation, substitute and replacement Teachers). In addition, where our internal staff view or otherwise use Session Recordings in connection with conducting Teacher training and improvement and other quality assurance and customer service and support programs, actual clips of the Session Recordings will not be shown to other Teachers without your permission. If you do not want a Teacher to view the Session Recording of any Private Session you participate in, or if you want us to delete the Session Recording of your Private Session, please contact us at support@royalmindfulness.com.

Classes and Workshops

Session Recordings of Classes and Workshops are recorded for conducting Teacher training and improvement and other quality assurance and customer service and support programs. All Class and Workshop SessionRecordings are owned by Royal mindfulness and viewable by Royal mindfulness, its Teachers and internal staff. Where you participate in a Class or Workshop as a Student, you may view the Session Recording of such Class or Workshop in connection with your personal yoga practice. Any other use, publication, or distribution of any Session Recording is prohibited.

YWF Classes

Session Recordings of YWF Classes are recorded for both the applicable Students and Teacher to refer to in developing future Session plans and yoga training and for the participating Students’ personal yoga practice. Subject to the limited license granted below and any applicable restrictions or limitations set forth in the Restrictions section below, Session Recordings of YWF Classes are owned by the Student designated as “host” with respect to the YWF Class (the “Host”), and are viewable by all participating Students. If you are the Host, you hereby grant to Royal mindfulness, its Teachers, employees and other personnel a perpetual, irrevocable, fully paid-up, royalty-free, worldwide right and license to access, store, view, disclose, and otherwise use the Session Recordings of any YWF Class in which you are the Host, for the purposes of (i) planning and providing yoga training to you and other participating Students, (ii) conducting Teacher training and improvement and other quality assurance and customer service and support programs, and (iii) such other purposes to which you may consent. Notwithstanding the foregoing, Royal mindfulness will not, without your consent, disclose Session Recordings of YWF Classes to Teachers other than (a) the Teacher that conducted the YWF Class, and (b) other Teachers with whom you work (including, without limitation, substitute and replacement Teachers). In addition, where our internal staff view or otherwise use Session Recordings in connection with conducting Teacher training and improvement and other quality assurance and customer service and support programs, actual clips of the Session Recordings will not be shown to other Teachers without your permission. If you do not want a Teacher to view the Session Recording of any YWF Class for which you are Host, or if you want us to delete the Session Recording of any YWF Class for which you are Host, please contact us at support@royalmindfulness.com.`,
  },
  {
    summary: "Your submissions",
    details: `User Submissions

The Service permits you to communicate with others, to participate in Session Recordings and to submit feedback, information, data, video, text, messages, or other content or materials in connection with the Service (collectively, "User Submissions"). As between you and Royal mindfulness, you are solely responsible for the accuracy, integrity, legality, reliability, and appropriateness of all of your User Submissions (and if you are an Enterprise Purchaser, the User Submissions of your Employee Users). Without limiting the generality of the foregoing, you shall not (and if you are an Enterprise Purchaser, you shall ensure that your Employee Users do not) upload, input, or post any User Submissions that (i) infringe the copyright, trademark, patent, trade secret, or other intellectual property rights, privacy rights, publicity rights or any other legal or moral rights of any third party, (ii) are false, inaccurate, or misleading, (iii) violate any law (including, but not limited to, those governing export control, consumer protection, unfair competition, anti-discrimination, or false advertising), (iv) are defamatory, libelous, hateful, racially, ethnically, religiously, or otherwise biased or offensive, unlawfully threatening, or unlawfully harassing to any individual, partnership, or corporation, vulgar, sexually explicit, pornographic, obscene, or invasive of another's privacy, (v) incorporate materials from a third-party website, or addresses, email addresses, contact information, or phone numbers (other than your own), (vi) contain any viruses, worms, spyware, adware, or other potentially damaging programs or files, (vii) contain any information that you consider confidential, proprietary, or personal, or (viii) contain or constitute any unsolicited or unauthorized advertising, promotional material, junk mail, spam, chain letters, pyramid schemes, or any other form of solicitation. You further represent and warrant that you (and if you are an Enterprise Purchaser, your Employee Users) have not been and will not be compensated or otherwise granted consideration by any third party for any User Submissions submitted by you (or if you are an Enterprise Purchaser, by any Employee User).

License

In consideration of your use of the Service, you hereby grant to Royal mindfulness an irrevocable, perpetual, transferable, non-exclusive, fully-paid, worldwide, royalty-free right and license (with right of license through multiple layers) to use, distribute, reproduce, modify, adapt, host, stream, publish, translate, publicly perform, and publicly display your (and, if you are an Enterprise Purchaser, your Employee Users’) User Submissions (or any modification thereto), in whole or in part, in any format or medium now known or later developed, for any and all Royal mindfulness business purposes, including, without limitation, making the Service or any Training available to you or third parties. For the avoidance of doubt, Royal mindfulness may use, and permit others to use, your User Submissions (and, if you are an Enterprise Purchaser, the User Submissions of your Employee Users) for purposes that we deem reasonable and appropriate in our sole discretion (including, without limitation, for commercial purposes or to incorporate such User Submissions or any modification thereto, in whole or in part, into any technology, product, or service), except that Session Recordings will only be used as set forth in the Recordings section set forth above. You represent and warrant to Royal mindfulness that you have all rights necessary to grant the rights and licenses granted to Royal mindfulness under these Terms.

Royal mindfulness Obligations

You acknowledge and agree that Royal mindfulness does not, nor is it obligated to, monitor or police any communications or data, information, materials, or content (including User Submissions, Participant Content or User Messaging (as defined below)) transmitted through or posted to the App, the Website, or the Service, and Royal mindfulness will not be responsible for such data, information, materials, or content (including User Submissions, Participant Content, or User Messaging). Notwithstanding the foregoing, however, Royal mindfulness may, at its option and in its sole discretion, monitor and review or remove or delete from the App, the Website, or the Service any data, information, materials, or content (including any User Submissions, Participant Content, or User Messaging) that Royal mindfulness determines violates these Terms.`,
  },
  {
    summary: "Content from other users",
    details: `The service may contain content provided by other royal mindfulness users, including other teachers, students, enterprise purchasers, and/or employee users (“participant content”). royal mindfulness is not responsible for and does not control participant content, including, without limitation, the accuracy or completeness of the same. you acknowledge and agree that your use (and, if you are an enterprise purchaser, the use by your employee users) of participant content and your (and if you are an enterprise purchaser, your employee users’) interaction with other users through the app, the website, and/or the service is at your own risk. you understand and acknowledge that royal mindfulness does not conduct background checks on its users, nor does royal mindfulness attempt to verify the accuracy or completeness of any participant content. royal mindfulness makes no representations or warranties as to, and shall not be liable to you or any other party for, the conduct of any students, enterprise purchasers, or employee users, or for any participant content. you agree and acknowledge that royal mindfulness will not be responsible for any liability or harm that may result from your interaction (or, if you are an enterprise purchaser, the interaction of any employee user) with other users of the service.`,
  },
  {
    summary: "Content transmitted through the service",
    details: `The Service includes certain features that enable you to message Teachers and other Students or Enterprise Purchasers, including in real time (collectively, “User Messaging”). Any opinions, recommendations, offers, advice, or other information disseminated through User Messaging are those of the respective Teacher, Student, or Enterprise Purchaser (or its Employee Users), and Royal mindfulness shall have no responsibility or liability with respect to the same. All User Messaging is subject to the requirements and restrictions set forth above with respect to User Submissions (see, Your Submissions, above). If you believe that another user has violated these Terms, including, without limitation, with respect to User Messaging or Participant Content, please promptly report the violation to Royal mindfulness using the contact information set forth below (see, Contact Us).`,
  },
  {
    summary: "Restrictions",
    details: `You agree to use the Service solely for your personal, non-commercial use (except where you are an Enterprise Purchaser purchasing the Service for the benefit of your Employee Users in accordance with the terms and conditions hereof), in accordance with all documentation relating to the Service made available by Royal Mindfulness (as the same may be updated from time to time), and in accordance with all applicable law. You shall not and, if you are an Enterprise Purchaser, you shall ensure that your Employee Users do not: (i) copy, reproduce, frame, mirror, modify, decompile, disassemble, create derivative works based on, or reverse engineer the Service or any associated software or materials (except to the extent that applicable law prohibits or restricts reverse engineering restrictions); (ii) copy, modify, create derivative works of, retransmit, sell, license, exploit, reuse, repost, broadcast, or otherwise distribute any content made available to you through the Service, including without limitation, Participant Content or Session Recordings; (iii) except where you are an Enterprise Purchaser providing your Employee Users access to the Service in compliance with the terms hereof, provide any third parties with access to any of the Service, or use any of the Service for time sharing or similar purposes for the benefit of any third party; (iv) sell, resell, rent or lease the Service; (v) remove any copyright or proprietary notices contained in the Service or any output thereof; (vi) breach, disable or tamper with, or develop or use (or attempt) any workaround for, any security measure provided or used by the Service; (vii) scrape or access the Service via any bot, web crawler or non-human user; (viii) access or use (or permit a third party to access or use) the Service for any unlawful purpose or for purposes of monitoring the availability, performance or functionality of the Service or for any other benchmarking or competitive purposes; (ix) misrepresent your identity, including, without limitation, by creating or attempting to create multiple Accounts for a single user or from a single IP address; (x) stalk or harass any other user of the Service; (xi) attempt to gain unauthorized access to the Service or any related systems, software or networks; (xii) access the Service in order to build a competitive product or service, or copy any features, functions or graphics of the Service; (xiii) use the Service to transmit viruses or malicious code; or (xiv) make any use of, or take any other action with respect to, the App, the Website, or the Service or any component thereof in a manner that violates applicable law or any provision of these Terms.`
  },
  {
    summary: "Your conduct",
    details: `Royal mindfulness expects all users of the Service, including all Students, Teachers, Enterprise Purchasers, and Employee Users, to uphold the highest standards of respect and appropriateness while using the Service. Without limiting your other obligations hereunder, you shall (and if you are an Enterprise Purchaser, ensure that each of your Employee Users), at all times when accessing or using the Service (including, without limitation, during any Training): (i) behave respectfully with the Teacher and other Students, both during Sessions and in all communications; (ii) dress appropriately for all Trainings; (iii) refrain from any use of expletives, degrading language, or sexually explicit words; and (iv) refrain from any action or conduct that could be viewed as obscene or sexually explicit.`,
  },
  {
    summary: "Payments",
    details: `Free trials

your access to the service pursuant to a membership plan may be preceded by a free trial (a “trial”). we reserve the right, in our sole discretion, to determine your eligibility for a trial. if you receive a trial, you (and if you are an enterprise purchaser, your employee users) may only use those portions of the service (and participate in those number and types of trainings) included in your trial, only for the duration of that trial, and only for the purpose of evaluating the desirability of purchasing the service. upon the expiration of any trial, your ability (or if you are an enterprise purchaser, the ability of your employee users) to schedule and participate in trainings will cease, except where you have purchased and/or registered for a membership plan in accordance with the terms hereof.

membership and other fees

as consideration for royal mindfulness’s provision of the service hereunder, if you are a student or enterprise purchaser, you shall pay to royal mindfulness all membership and other fees applicable to your (or, if you are an enterprise purchaser, your employee users’) access to and use of the service (including, without limitation, your booking or participation in any training) as set forth herein. except where you access the service as part of a trial, you must have a current valid credit card or other payment method acceptable to royal mindfulness (“payment method”) in order to access or make purchases through the service. by providing a payment method to royal mindfulness, you expressly authorize royal mindfulness to charge to you those membership and other fees (including sales and other taxes) applicable to your membership plan or other use of the service at the applicable frequency and at the then-current rate. membership and other fees applicable to your use of the service shall be as posted at https://www.royalmindfulness.com/pricing as of the payment due date. all fees are inclusive of applicable taxes charged on providing the service. royal mindfulness will bill all applicable membership fees and other amounts in advance and to the payment method you provide during registration (or to a different payment method if you change your payment method information in your account or provide us with a different payment method in connection with a purchase). all fees hereunder are fully earned upon payment and, except as specifically set forth in the cancelations section below, are non-refundable.

please note that our fees (including any membership fees) are subject to change at any time and in our sole discretion, provided that any change in fees will not affect sessions that have already been paid for and booked.

renewals

if you purchase a membership plan, your membership plan will automatically renew for additional membership terms of the same length upon expiration of your initial membership term unless and until you cancel your membership plan or we terminate it. you must cancel your membership plan before it renews for a renewal membership period in order to avoid billing of membership fees for the renewal membership period to your payment method.

if you purchase a membership plan, your membership plan will automatically renew for additional membership terms of the same length upon expiration of your initial membership term unless and until you cancel your membership plan or we terminate it. you must cancel your membership plan before it renews for a renewal membership period in order to avoid billing of membership fees for the renewal membership period to your payment method.

cancelations

if you are a student or enterprise purchaser, booked sessions can be canceled by you free of charge more than 12 hours in advance of the session start time. if you fail to cancel a session at least 12 hours prior to the session start time, you will be billed the full amount for such session. for more information on our session cancelation policy, please see our frequently asked questions page at https://www.royalmindfulness.com/faq.

you may also cancel your membership plan at any time by calling us at 1+ (855) 771-2929 or by emailing royal mindfulness at support@royalmindfulness.com and including the phrase “cancel my account” in the subject line; provided, however, that any such cancellation shall not become effective until the expiration of your then-current membership term. if you cancel your membership plan, you will continue to have access to the service (including those trainings for which you have paid or are otherwise entitled to access through your membership plan) in accordance with the terms of your applicable membership plan for the remainder of the then-current membership term. except as otherwise expressly set forth herein, royal mindfulness does not provide refunds or credits with respect to the service or any membership plan, including for any individual trainings.

notwithstanding the foregoing, you may choose to pause your membership plan without penalty through the app or by emailing royal mindfulness at support@royalmindfulness.com and including the phrase “pause my account” in the subject line. if you pause your membership plan, your membership plan will be extended by the number of days the pause was in effect. you may pause your membership plan up to 3 times within a 12-month period; provided, however, that the cumulative days that your membership plan is paused may not exceed 60 days per 12-month period.

for more information on pausing, canceling, or making changes to your membership plan, please see our frequently asked questions page at https://www.royalmindfulness.com/faq.
`,
  },
  {
    summary: "App store terms",
    details: `The App may be available for download from one or more platforms, such as the Apple App Store or Google Play (each, an “App Store”). Your download, installation, access to or use of the App is subject to the terms and conditions and privacy policies of the applicable App Store from which you access the App (“App Store Terms”). If there is any conflict between these Terms and the App Store Terms, then these Terms will prevail. This App is independent of and is not associated, affiliated, sponsored, endorsed, or in any way linked to any App Store. You and we acknowledge that these Terms are entered into between you and us only, and not with any App Store, and we, not the App Store, are solely responsible for the App and the content thereof, as contemplated by these Terms. You and we acknowledge that we, not the relevant App Store, are responsible for addressing any claims by you or any third party relating to the App or your possession and/or use of the App, including, but not limited to: (i) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (ii) claims arising under consumer protection or similar legislation. You and we acknowledge and agree that the relevant App Store, and that App Store’s subsidiaries, are third party beneficiaries of these Terms, and that, upon your acceptance of these Terms, that App Store will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third party beneficiary thereof.`,
  },
  {
    summary: "Accessibility",
    details: `You can access the Service through the Website or through accessing the App on your Device. Where you access the Service through the App, you can use either your cellular service or a WiFi or other internet connection. If you use your cellular service, you acknowledge that your agreement with your cellular network provider (“Cellular Provider”) will apply to your use of the App and Service. You acknowledge that you may be charged by your Cellular Provider for data services or other applicable third party charges. You agree that you are solely responsible for your use of the Service on your Device, for your adherence to your Cellular Provider’s terms and conditions, and for all costs arising from or relating to the foregoing. If you are not the bill payer for the Device being used to access the App, you will be assumed to have received permission from the bill payer for using the App.`,
  },
  {
    summary: "Electronic communications",
    details: `By using the Service, you consent to receiving electronic communications from us at the email address you provide in your Account. These electronic communications may include notices about applicable fees and charges, transactional information and other information concerning or related to the Service. These electronic communications are part of your relationship with us. You agree that any notices, agreements, disclosures or other communications that we send you electronically will satisfy any legal communication requirements, including that such communications be in writing.`,
  },
  {
    summary: "Privacy",
    details: `By using the Service, you consent to receiving electronic communications from us at the email address you provide in your Account. These electronic communications may include notices about applicable fees and charges, transactional information and other information concerning or related to the Service. These electronic communications are part of your relationship with us. You agree that any notices, agreements, disclosures or other communications that we send you electronically will satisfy any legal communication requirements, including that such communications be in writing.

Our Use of Personal Information

You acknowledge and agree that information collected by Royal mindfulness is subject to our Privacy Policy. By accessing, using, or otherwise participating in the Service, you consent to all actions we take with respect to your information in compliance with our Privacy Policy.

Your Use of Personal Information

Through your use of the Service, including, without limitation, your participation in Trainings, you may be provided or receive access to the personal information of other users of the Service, including Teachers and Students (“User Information”). You agree that you shall only access or use User Information exclusively for the purpose for which it was provided or made available to you. You may not disclose, sell, rent, or distribute any User Information to a third party for any purpose not directly related to and necessary for your use of the Service. Additionally, you may not use User Information for marketing purposes, including via electronic or other means, unless you obtain the consent of the specific user to do so.`,
  },
  {
    summary: "Intellectual property",
    details: `Royal mindfulness Intellectual Property

As between you and Royal mindfulness, the App, the Website, and the Service, and all software and other technologies embodied in or used to provide any of the foregoing, and all intellectual property rights therein or relating thereto, are and shall remain the exclusive property of Royal mindfulness. No rights are granted to you other than as expressly set forth herein.

Additionally, “Royal mindfulness” and all associated logos are trademarks that belong to Royal mindfulness. Other trademarks, names and logos seen on the Service are the property of their respective owners. Unless otherwise specified in these Terms, the Service and all materials provided through the Service are the sole and exclusive property of Royal mindfulness and are protected under United States and international copyright law. Except as otherwise required or limited by applicable law, any reproduction, distribution, modification, retransmission, or publication of any copyrighted material is strictly prohibited without the express written consent of the copyright owner or licensor.

User Submission

As between you and Royal mindfulness, but subject to the licenses granted to Royal mindfulness under these Terms, you own all right, title and interest in and to your User Submissions.

Feedback

To the extent you provide Royal mindfulness with any suggestions, feature requests, evaluation results, feedback, or other input in relation to any aspect of the App, the Website, or the Service (collectively, “Feedback”), you hereby assign and agree to assign to Royal mindfulness all right, title and interest in and to such Feedback, including any intellectual property rights therein, and agree that Royal mindfulness will be free to use such Feedback in any manner, including by implementing such Feedback in the App, the Website, the Service, and/or Royal mindfulness’s other technologies, products and services, without compensation or other obligation to you.

Data Use

Without limiting any of Royal mindfulness’s other rights hereunder, Royal mindfulness shall have the right to collect, examine, extract, model, manipulate, aggregate, collate, analyze, create analysis using, reproduce and otherwise use, on a de-identified basis, any information, including, without limitation, usage information, that Royal mindfulness learns, acquires or obtains in connection with these Terms, within the scope of its regular business operations, including, without limitation, (i) developing, operating, and ensuring the integrity of data sets, algorithms or other analytical tools, (ii) testing, implementing, benchmarking, integrating, developing, optimizing or improving Royal mindfulness software and other products and services, and (iii) marketing, distributing, or otherwise making Royal mindfulness products and services available to its customers.`,
  },
  {
    summary: "Third party applications",
    details: `The Service may contain links to or otherwise utilize or allow you to access third party applications and services (“Third Party Services”) that are not owned or controlled by Royal mindfulness. When you access third party websites or Third Party Services, you do so at your own risk. Royal mindfulness encourages you to be aware when you leave the Service and to read the terms and conditions and privacy policy of each third-party website or Third Party Service (“Third Party Terms”) that you visit or from which you access any product or service. Royal mindfulness has no control over, and assumes no responsibility for, the content, accuracy, Third Party Terms, or practices of any third-party website or Third Party Service. In addition, Royal mindfulness will not and cannot monitor, verify, censor, or edit the content of any third-party website or Third Party Service. When you (or if you are an Enterprise Purchaser, any Employee Users) visit or use a third party’s website or Third Party Service, you acknowledge that such website or Third Party Service is subject to the applicable Third Party Terms, and you release us from any liability arising from your use of such websites or Third Party Service. You acknowledge that we are not responsible for such third parties or their products or services. Any such activities, and any Third Party Terms associated with such activities, are solely between you and the applicable third party.`,
  },
  {
    summary: "Disclaimer of warranties",
    details: `The app, the website, and the service (including any trainings) are provided to you on an 'as is' and 'as available' basis, without warranties of any kind, and royal mindfulness hereby disclaims all warranties, whether express, implied, statutory, or otherwise, including but not limited to any implied warranties of merchantability, fitness for a particular purpose, quality, title, and non-infringement. neither royal mindfulness nor any person associated with royal mindfulness makes any representation or warranty with respect to the completeness, security, reliability, quality, accuracy, or availability of the app, the website, or the service (including any trainings). without limiting the foregoing, neither royal mindfulness nor anyone associated with royal mindfulness represents or warrants that the app, the website, or the service (including any trainings), or any results generated therefrom, will be accurate, reliable, error-free, or uninterrupted, that defects will be corrected, that the app, the website, or the service or the servers that make them available are free of viruses or other harmful components, or that the app, the website, or the service (including any training) will otherwise meet your needs or expectations. royal mindfulness makes no representations or warranties as to the safety or appropriateness of your (or if you are an enterprise purchaser, your employee users') participation in the service or any training, or that you (or if you are an enterprise purchaser, your employee users) will receive any specific results or health benefits from participating in the service or any training. you agree and acknowledge that royal mindfulness is not a provider of medical services and that nothing provided to or made available to you (or, if you are an enterprise purchaser, to any employee user) through the service, including any training or teacher direction or instruction, shall constitute medical advice. you (and if you are an enterprise purchaser, your employee users) participate in trainings at your own risk. royal mindfulness further makes no representations or warranties, and disclaims any responsibility or liability for, the actions of other users of the service, any third party service, or the quality or availability of trainings. as between you and royal mindfulness, you assume all risk in connection with your (or if you are an enterprise purchaser, your employee users') access to and use of the app, the website, and the service, and your (and if you are an enterprise purchaser, your employee users') participation in any training, and all results generated thereby or available therethrough.

some jurisdictions do not allow the exclusion or limitation of certain warranties, so some of the exclusions and/or limitations in this section may not apply to you.`,
  },
  {
    summary: "Indemnity",
    details: `You agree to indemnify, defend, and hold Royal mindfulness and its officers, directors, employees, agents, licensors, and service providers harmless from and against any claims, liabilities, losses, damages, judgments, awards, costs, and expenses (including reasonable attorneys’ fees) arising out of or resulting from (a) your (or if you are an Enterprise Purchaser, any Employee User’s) access to and use of the Service, the App, or the Website, or your (or if you are an Enterprise Purchaser, any Employee User’s) participation in any Training; (b) your violation (and if you are an Enterprise Purchaser, any Employee User’s violation) of these Terms or of any applicable law, rule, or regulation; (c) your negligence or willful misconduct; (d) any User Submission posted or uploaded to, or otherwise made available through, the Service; and (e) if you are an Enterprise Purchaser, any act, omission, or User Submission posted or uploaded by, any Employee User. We reserve the right, at our own expense, to assume the exclusive defense and control of any action subject to indemnification by you, and in such event you agree to cooperate with us in defending such action.`,
  },
  {
    summary: "limitation of liability",
    details: `To the maximum extent permitted by law, in no event will royal mindfulness or its officers, directors, employees, teachers, agents, licensors, or service providers be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising from or related to your (or, if you are an enterprise purchaser, your employee users') access to, use of, or inability to access or use the app, the website, or the service (including any training), including, but not limited to, loss of revenue, loss of profits, loss of business, loss of use, loss of data, damage to or loss of property, or personal injury or death, whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable. if, notwithstanding the provisions of this section, royal mindfulness is found liable for any loss or damage under any legal theory relating in any way to the subject matter of this agreement, in no event will royal mindfulness's aggregate liability to you or any third party exceed the total amount of membership fees, if any, paid by you to royal mindfulness in the six (6) month period preceding the event first giving rise to the claim. if you are not satisfied with the app, the website, or the service (including any trainings), your sole and exclusive remedy is to cancel your membership plan, if any, and cease all access to and use of the app, the website, and the service.

    some jurisdictions do not allow the limitation of liability for incidental or consequential damages or other damages or liability, so the foregoing limitations may not apply to you. to the extent that in a particular circumstance any limitation on damages or liability set forth in this section is prohibited by applicable law, then, instead of the provisions hereof in such particular circumstance, royal mindfulness shall be entitled to the maximum limitations on damages and liability available at law and equity in that particular circumstance.
    
    you and royal mindfulness understand and agree that the disclaimers, exclusions, and limitations in this section and in the section entitled 'disclaimers of warranty' above are essential elements of this agreement and that they represent a reasonable allocation of risk. in particular, you understand that royal mindfulness would be unable to make the app, the website, or the service available to you except on these terms and agree that this agreement will survive and apply even if any limited remedy specified in this agreement is found to have failed of its essential purpose.
    `,
  },
  {
    summary: "Digital millenium copyright act",
    details: `Royal mindfulness is committed to respecting and protecting the legal rights of copyright owners in accordance with the Digital Millennium Copyright Act (Section 512(c)(3) of the DMCA (17 U.S.C. § 512 et seq.)). If you believe any content infringes your intellectual property rights, please submit a notice to us describing such infringement (a “DMCA Takedown Notice”) with the following information:

    A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;
    
    Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works;
    
    Identification of the material claimed to be infringing or to be the subject of infringing activity and that is to be removed or access disabled and information reasonably sufficient to permit the service provider to locate the material;
    
    Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and, if available, email address;
    
    A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and
    
    A statement that, under penalty of perjury, the information in the notification is accurate and you are authorized to act on behalf of the owner of the exclusive right that is allegedly infringed.
    
    Any DMCA Takedown Notice should be sent to: support@royalmindfulness.com. You acknowledge that for Royal mindfulness to be authorized to takedown any content, your DMCA Takedown Notice must comply with all of the requirements of this Section.
    
    We reserve the right, in our sole discretion, to terminate the Account or access of any user of the Service who is the subject of repeated DMCA or other infringement notifications.`,
  },
  {
    summary: "Local law export controls",
    details: `We control and operate the Service from our headquarters in the India and some or all of the Service may not be appropriate or available for use in other locations. If you (or, if you are an Enterprise Purchaser, any of your Employee Users) use the Service outside India, you are solely responsible for following applicable local laws.

    Neither the App, the Website, the Service, nor their respective underlying technologies may be downloaded to or exported or re-exported: (i) into (or to a resident or national of) any country subject to Indian embargo; (ii) to anyone on the Indian Department of the Treasury’s list of Specially Designated Nationals or on the Indian Department of Commerce’s Denied Party or Entity List; and (iii) to any prohibited country, person, end-user, or entity specified by U.S. export laws. When using the App, the Website, or the Service, (and, if you are an Enterprise Purchaser, when you allow any Employee User to do the same) you are responsible for complying with trade regulations and both foreign and domestic laws (e.g., you are not located in a country that is subject to an Indian government embargo, or that has been designated by the Indian government as a "terrorist supporting" country, and you are not listed on any U.S. government list of prohibited or restricted parties).`,
  },
  {
    summary: "General",
    details: `Service Availability

You agree and acknowledge that the App, the Website, and/or the Service may be temporarily unavailable due to maintenance or other development activities. Royal mindfulness will use commercially reasonable efforts to provide you with advance notice of any such unavailability, but shall not have any liability to you or any other party for any planned or unplanned unavailability or downtime.

Force Majeure

We will not be liable for any delay or failure in the performance of our obligations under these Terms if the delay or failure is due to any cause outside of our reasonable control.

Assignment

You may not assign or transfer any rights to any other person without Royal mindfulness’s prior written consent. Any purported assignment in violation of this paragraph is void and of no effect. This Agreement shall be binding on the parties and their permitted successors and assigns. Except as expressly set forth herein, a person who is not a party to these Terms has no right to benefit under or to enforce any term of these Terms.

Governing Law and Venue

These Terms and any dispute or claim arising out of or related to these Terms, their subject matter, or their formation (in each case, including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the State of California, other than such laws and case law that would result in the application of the laws of a jurisdiction other than the State of California. The United Nations Convention on Contracts for the International Sale of Goods shall have no applicability. Any dispute between the parties that is not subject to arbitration or cannot be heard in small claims court will be resolved in the state or federal courts located in San Francisco, California.

Notices

Except as otherwise set forth herein, any notice given under these Terms by any party to another party must be in writing and sent by email, and will be deemed to have been given upon transmission. Notices to Royal mindfulness must be sent to support@royalmindfulness.com. Notices to you will be sent to any email address associated with your Account.

Severability and Waiver

If any part or provision of these Terms is held by a court of competent jurisdiction to be invalid, unenforceable, or in conflict with the law, that part or provision shall be replaced with a provision which, as far as possible, accomplishes the original purpose of that part or provision, and the remainder of these Terms will continue in full force and effect. Our failure to exercise or enforce any right or provision of these Terms will not constitute a waiver of such right or provision. If we waive any breach of these Terms, such waiver will not constitute a waiver of any other breach. No waiver will be effective unless made in writing.

Entire Agreement

These Terms, together with the Privacy Policy and, if you are a Teacher, your Teacher Agreement, constitute the sole and entire agreement between you and Royal mindfulness with respect to the subject matter hereof, and supersede and extinguish all prior agreements, representations (whether oral or written), and understandings regarding such subject matter. Any provision of these Terms that should, by their nature, survive termination of these Terms shall so survive termination. Without limiting the generality of the foregoing, the following Sections shall survive any termination of these Terms: “Assumption of Risk; Release”; “Your Submissions”; “Content from other Users”; “Content Transmitted through the Service”; “Restrictions”; “Accessibility”; “Privacy”; “Intellectual Property”; “Third Party Applications”; “Disclaimer of Warranties”; “Indemnity”; “Limitation of Liability”; “Arbitration; Jury Waiver; Class Action Waiver”; and “General”.`,
  }
];




exports.privacyPolicyText = [
  "RoyalMindfulness.com, Inc. (“Royalmindfulness.com,” “we,” or “us”) recognizes the importance of protecting your privacy and is committed to communicating transparently regarding our privacy practices. This Privacy Policy describes the types of information we collect when you visit our website at https://royalmindfulness.com/ or any subdomain thereof (the “Website”), or visit or use our mobile software application (the “App”) or any related mobile or desktop applications, including any content or functionality offered on or through any of the foregoing (collectively with the Website and the App, the “Site”), or when you access or use the online services we make available through the Site, including certain virtual classes that may be made available by Royalmindfulness.com via third party vendors (such as Zoom or such other video conferencing platforms or services as royalmindfulness.com may elect to use from time to time) (collectively, the “Service”). This Privacy Policy also describes our practices for using, maintaining, protecting, and disclosing such information.",
  "Please read this Privacy Policy carefully before you start to use the Site or Service to understand our policies and practices regarding how we treat your information. By accessing or using the Site or Service in any manner, you accept and agree to be bound by this Privacy Policy. “If you do not agree with any terms of this Privacy Policy, you may not access or use the Site or Service for any purpose”.",
  "This Privacy Policy applies to information we collect on the Site, in email, text, or other electronic messages between you and the Site, and through your access to or use of the Service through the Site. Except as otherwise expressly set forth herein, it does not apply to information collected by us offline or through any other means, including on any other website operated by us or any third party, nor to information collected by any other third party, including through any application or content (including advertising) that may link to or be accessible from or on the Site or Service.",
  "This Privacy Policy may change from time to time (see “Updates to Our Privacy Policy,” below). Your continued use of the Site or Service after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.",
  "Privacy of children ",
  "this privacy policy explains our information practices in connection with information provided by any children, which are defined as individuals residing in the united states under the age of 13, individuals residing in the uk or european economic area that are under the age of 16, or individuals in other jurisdictions that are regarded as children and afforded special privacy protections under the laws of those jurisdictions (children or child).",
  "Parental Consent",
  "We require that the parent or legal guardian (“Parent”) of any Child desiring to use the Site or Service provide consent before that Child uses the Site or Service. Such consent may be revoked at any time, after which that Child is prohibited from further use of the Site or Service. Further, Children that have Parental Consent may only use the Site or Service if they are under direct supervision of an adult.",
  "Children are Protected",
  "We are committed to protecting children's privacy. We support the Children's Online Privacy Protection Act (“COPPA”) and other frameworks like the General Data Protection Regulation (Regulation (EU) 2016/679) (the “GDPR”) or the UK GDPR adopted post Brexit (also referred to herein for convenience as simply the “GDPR”). Our goal is to minimize the information gathered from and disseminated about Children while permitting them active participation in the Site and Service for which we are known.Children and their Parents may contact us at any time regarding our Child privacy practices at support@royalmindfulness.com.",
  "Information we collect about you",
  "When you access the Site or use the Service, whether as one of  Royalmindfulness.com’s professional yoga teacher (a “Teacher User”), as a user accessing yoga instruction via the Service as a purchaser of a royalmindfulness membership or other paid access to the Service (a “Student Member”), as a user accessing Meditation instruction via the Service on a trial basis (a “Trial User”), as an enterprise that purchases or otherwise registers for access to the Service on behalf of or for the benefit of that enterprise’s employees or representatives (an “Enterprise User”), or as an individual employee or representative of an Enterprise Purchaser who accesses or uses the Service as an authorized recipient of Service benefits purchased by an Enterprise Purchaser (an “Employee User” and, collectively with Student Member, Trial User, Enterprise User, and Employee User, a “Student User”), we may collect some “personal information” about you. This includes :",
  "your name, your postal address, your e-mail address, your phone number, recordings and/or images of you; and, medical history. This also includes information that relates to you but may not specifically identify you, such as:",
 
  "information about your gender and/or age, information about your internet connection, information about the equipment you use to access the Site or Service, your usage details, your IP addresses and information collected through cookies and other tracking technologies.",
  "Information We Collect Directly From You We collect personal information from various sources, such as directly from you when you access or use the Site or Service. This may include:",
  "information that you provide by filling in forms on the Site or through the Service. This includes information provided at the time of registering to use the Site, subscribing to the Service, posting material, or requesting further services or, if you are a Teacher User, providing services to royalmindfulness. We may also ask you for information when you enter a contest or promotion sponsored by us, and when you report a problem with the Site or Service.information you provide when providing comments or reviews on, or communicating with others through, the Service including, without limitation, by posting User Contributions (as defined below).records and copies of your correspondence (including email addresses), if you contact us.your responses to surveys that we might ask you to complete for research purposes.if you are a Student User, details of transactions you carry out through the Site or Service and of the fulfillment of your orders. If you are a Student Member or Enterprise User, you may be required to provide financial information before placing an order or making a purchase through the Site.your search queries on the Site.You also may provide information, comments, reviews, images, and other content to be published or displayed (hereinafter, 'posted') on public areas of the Site, or transmitted to other users of the Site or third parties (collectively, 'User Contributions'). Your User Contributions are posted on and transmitted to others at your own risk. Although you may have the option to set certain permission settings through your account, please be aware that no security measures are perfect or impenetrable. Additionally, we cannot control the actions of other users of the Site with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons.",
  "Information We Collect by Automatic Means",
  "When you navigate through and interact with the Site, we may use automatic data collection technologies to collect certain information about your equipment, browsing, actions, and patterns, including: information about the devices you use to access the Site (such as the IP address and the type of the device, operating system, and web browser); dates, times, and duration of use of the Site (including whether you are a repeat or first-time visitor) information on actions taken when using the Service (such as page views and website navigation patterns) information about your network provider, mobile carrier, mobile browser type, and your click-sequence and tap-sequence when using your device or the App click-sequence and tap-sequence when using your device or the App information about your online activities over time and across third-party websites or other online services (behavioral tracking) certain geolocational information, such as your time zone and information about the speed, bearing, orientation, and altitude of your mobile device when using the App and audio, video, or other digital information gather during and with respect to group and/or personalized yoga instruction conducted through the Service (“Trainings”), whether you participate as a Teacher User or Student User, and including, without limitation, chat messages, chat logs, and video and audio ”Recordings of Training Sessions,” (as more specifically described in Recordings of Training Sessions, below). In addition, we use third-party web analytics services to help us understand your use of the Site and the popularity of certain content so we can improve your experience. For more information on our use of third-party analytics services, see  “ Third Party Providers”  below. Information we collect automatically may be statistical data that does not include personal information. We may maintain or associate any such statistical data with personal information we collect in other ways or receive from third parties. It helps us to estimate our audience size and usage patterns, speed up user experience, and to improve and personalize the Service, including enabling us to identify and authenticate users. To the extent that we associate any of this non-personal information with your personal information, we will treat it as personal information under the terms of this Privacy Policy. Technologies we use for automatic data collection may include cookies. A cookie is a small file placed on the hard drive of your computer. There are two types of cookies: session and persistent cookies: Session Cookies. Session cookies exist only during an online session. They disappear from your computer when you close your browser or turn off your computer. We use session cookies to allow our systems to uniquely identify you during a session or while you are logged into the Site. This allows us to process your online transactions and requests and verify your identity, after you have logged in, as you move through our Site. Persistent Cookies. Persistent cookies remain on your computer after you have closed your browser or turned off your computer. We use persistent cookies to track aggregate and statistical information about user activity. Pages of our Site and our emails may also contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit us, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).",
  "Recordings of Training Sessions The Service is interactive, in that it enables Student Users to connect in real-time to Teacher Users and for Teacher Users to connect with Student Users to provide the Training sessions. These Training sessions, whether one-on-one (“Private Sessions ”), group training (“Workshops”), group classes (“Classes”), or group classes offered through Yoga with Friends (“YWF Classes”), are recorded for the limited purposes set forth herein (“Session Recordings”). You expressly consent to be recorded in connection with the Training sessions that you participate in through the Service, and to the use and disclosure of such Session Recordings as detailed herein.Private Sessions. Session Recordings of Private Sessions are recorded for both the applicable Student User and Teacher User to refer to in developing future Training session plans and yoga training, and for the Student User’s personal yoga practice. Subject to the limitations, restrictions, and licenses set forth in the royalmindfulness Terms of Use, Session Recordings of Private Sessions are owned and viewable by the participating Student User. Notwithstanding the foregoing, Royalmindfulness, its teachers, employees and other personnel may access, store, view, disclose, and otherwise use the Session Recordings of any Private Sessions in which you participate for the purposes of (i) planning and providing meditation training to you, (ii) conducting teacher training and improvement and other quality assurance and customer service and support programs, and (iii) such other purposes to which you may consent. royalmindfulness will not, however, disclose Session Recordings of Private Sessions (without your consent) to other Student Users or teachers other than (a) the teacher that conducted the Private Session, and (b) other teachers with whom you work (including, without limitation, substitute and replacement teachers). In addition, where royalmindfulness’s internal staff view or otherwise use Session Recordings in connection with conducting teacher training and improvement and other quality assurance and customer service and support programs, actual clips of the Session Recordings will not be shown to other teachers without your permission. If you do not want a teacher to view the Session Recording of any Private Session you participate in, or if you want us to delete the Session Recordings of your Private Sessions, please contact us at support@royalmindfulness.com.",
  "Classes and Workshops. Session Recordings of Classes and Workshops are recorded for conducting teacher training and improvement and other quality assurance and customer service and support programs. All Class Sessions and Workshops Recordings are owned by royalmindfulness and viewable by royalmindfulness, its teachers and internal staff. Where you participate in a Class or Workshop as a Student User, you may view the Session Recording of such Class or Workshop in connection with your personal meditation practice. Any other use, publication, or distribution of any Class Session or Workshop Recording is prohibited. YWF Classes. Session Recordings of YWF Classes are recorded for both the applicable Student Users and Teacher User to refer to in developing future Session plans and yoga training and for the participating Students’ personal yoga practice. Subject to the limitations, restrictions, and licenses set forth in the royalmindfulness Terms of Use, Session Recordings of YWF Classes are owned by the Student User designated as “host” with respect to the YWF Class (the “Host”), and are viewable by all participating Student Users. Notwithstanding the foregoing, royalmindfulness, its teachers, employees and other personnel may access, store, view, disclose, and otherwise use the Session Recordings of any YWF Class for the purposes of (i) planning and providing yoga training to participating Student Users, (ii) conducting teacher training and improvement and other quality assurance and customer service and support programs, and (iii) such other purposes to which the Host may consent. royalmindfulness will not, however, disclose Session Recordings of YWF Classes (without the Host’s consent) to non-participant Student Users or to teachers other than (a) the teacher that conducted the YWF Class, and (b) other teachers with whom participating Student Users work (including, without limitation, substitute and replacement teachers). In addition, where our internal staff view or otherwise use Session Recordings in connection with conducting teacher training and improvement and other quality assurance and customer service and support programs, actual clips of the Session Recordings will not be shown to other teachers without the Host’s permission. If you do not want a teacher to view the Session Recording of any YWF Class for which you are Host, or if you want us to delete the Session Recording of any YWF Class for which you are Host, please contact us at support@royalmindfulness.com.Please note that you are responsible for ensuring that the camera on your device that is used for Session Recordings does not show any other persons besides yourself (such as your children). We are not responsible for any video, audio, or other personal information collected through Session Recordings of any other persons (other than participating Teacher Users and Student Users) that are located in your vicinity when participating in a Training session. You are solely responsible for obtaining, and hereby represent and warrant to royalmindfulness that you have obtained, all required permissions and consent from any such person (including any minor) that might be shown or recorded (audibly or visually) through any device used by you when participating in a Training session.",
  "Third Party Use of Cookies and Other Tracking Technologies Some content or applications on the Site are served by third-parties, including content and application providers. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our Site. The information they collect may be associated with your personal information or they may collect information, including personal information, about your online activities over time and across different websites and other online services. They may use this information to provide you with interest-based (behavioral) advertising or other targeted content.We do not control these third parties' tracking technologies or how they may be used. If you have any questions about any targeted content, you should contact the responsible provider directly.",
  "Chat Functionality This agreement governs your access and use of the Royalmindfulness Chat Functionality within the Royalmindfulness application and website. By using the Chat Functionality, you agree to be bound by the terms of this policy. (1) Functionality: The Chat Functionality allows you to:Initiate one-on-one conversations (“P2P”) with your Teacher or other Students.Create private groups by inviting a Teacher and other Students. Join public community groups.(2) User Conduct: You agree to use the Chat Functionality in a respectful and appropriate manner. You will not:Transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, obscene, hateful, or racially or ethnically offensive.Share personal information of others without their consent.Engage in spam or commercial solicitation.Disrupt the flow of conversation or prevent others from using the Chat Functionality.(3) Disclaimer: Royalmindfulness does not monitor the content of private communications. We are not responsible for the content of communications or the actions of users.(4) Reporting: You can report inappropriate content or user behavior to Royalmindfulness support desk. We will investigate reports and take appropriate action, which may include suspending or terminating a user's account.(5) Privacy: Royalmindfulness respects your privacy. Please refer to our Privacy Policy for information on how we collect, use, and disclose your personal information.(6) Changes to the EULA: Royalmindfulness may update this EULA from time to time. We will notify you of any changes by posting the revised EULA within the Application. Your continued use of the Chat Functionality after the revised EULA becomes effective will constitute your acceptance of the changes.(7) Termination: Royalmindfulness may terminate your access to the Chat Functionality for any reason, with or without notice.(8) Governing Law: This EULA will be governed by and construed in accordance with the laws of India and USA.(9) Entire Agreement: This EULA constitutes the entire agreement between you and Royalmindfulness regarding the Chat Functionality and supersedes all prior or contemporaneous communications and proposals, whether oral or written.(10) Severability: If any provision of this EULA is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.(11) Contact Us: If you have any questions about this EULA, please contact us at support@royalmindfulness.com How we use your information We use your information, including your personal information, for the following purposes:",
  "(i)if you are a Student User, to process orders you place and complete other transactions you have requested using the Site or the Service, and provide you with products and services you request; (ii)to facilitate Trainings conducted through the Service;(iii) to facilitate the exchange of in-App or in-Service messages sent or received by you (“User Messages”);(iv)to send you information or materials you request;(v) if you are a Member User, to maintain a record of your purchases and other transactions using the Site or the Service;(vi) to market and advertise our products and services, including the Service; (vii)to respond to your questions and comments and provide customer support;(viii)to communicate with you about our products, services, offers, and promotions;(ix)to operate, evaluate, and improve our business and the products and services we offer;(x)to analyse trends and statistics regarding use of the Service and transactions conducted using the Service;(xi)to protect against and prevent fraud, unauthorized transactions, claims, and other liabilities, and manage risk exposure, including by identifying potential hackers and other unauthorized users;(xii)to enforce our Terms of Use and other agreements;(xiii)to comply with applicable legal requirements and industry standards; and (xiv)for any other purpose for which you provide your consent.We may also use your information to contact you about our own and third-parties’ goods and services that may be of interest to you. If you do not want us to use your information in this way, please email support@royalmindfulness.com. For more information, see “Your Choices.” How we share your informationWe may share your information, including personal information, as follows:(xv)to our subsidiaries and affiliates;(xvi)to contractors, service providers, and other third parties we use to support our business including, without limitation, Teacher Users from whom you receive Trainings (if you are a Student User) (see “ Third Party Providers”  below);(xvii)to comply with any court order, law, or legal process, including to respond to any government or regulatory request;(xviii)to enforce or apply our Terms of Use and other agreements;(xix)if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Royalmindfulness, users of the Site or Service, and/or others;(xx)to facilitate the exchange of User Messages between you and other users of the Site;(xxi)for any other purpose which is incidental to the normal use of the Service; and (xxii)for any other purpose for which you provide your consent.We also reserve the right to transfer your personal and other information to a buyer or other transferee in the event of a merger, divestiture, restructuring, reorganization, dissolution, sale, or other transfer of some or all of our assets. Should such a sale, merger, or transfer occur, we will use reasonable efforts to direct the transferee to use your information in a manner that is consistent with our Privacy Policy.Third party providers Without limiting the foregoing, we may also employ third party companies and individuals to assist in providing the Service and to facilitate our Site and to process data, perform Site-related services, or to assist us in analyzing how the Service is used (collectively, “Third Party Providers”). These Third Party Providers may have access to your personal information for purposes of performing these tasks on our behalf, and may have the right to retain and use personal information or other information through performance of these tasks on an aggregated and de-identified basis in accordance with the terms of the applicable Third Party Provider’s privacy policy. We advise you to review the privacy policies of the Third Party Providers, but note that we have no control over and assume no responsibility for the content, privacy policies or practices of any Third Party Providers, their sites or services.Third Party Providers may include, but are not limited to, the following:",
  " “Payment Processors:-”. We use Third Party Providers (currently Razorpay) to process certain payment transactions initiated via the Site. Your payment card details are not stored by the Site. If you provide payment information to Razorpay in order to facilitate payment processing, your payment card details are encrypted and securely stored by our third party payment processors. You can learn more about Razorpay’s privacy practices at https://razorpay.com/s/pos-machine-privacy-policy/.",
  " “Analytics:-”. We may use Third Party Providers to monitor and analyze the use of our Site.Mixpanel. Mixpanel may be used to track and analyze traffic to and from the Site. You can learn about Mixpanel’s privacy practices at https://mixpanel.com/legal/privacy-policy/. For information on how you may opt out of tracking by Mixpanel, please visit https://docs.mixpanel.com/docs/privacy/protecting-user-data. Google Tag Manager. Google Tag Manager is a tag management service that may be used to manage and control marketing tags. You can learn about Google’s privacy practices at https://www.google.com/intl/en/policies/privacy. For information on disabling Google Tag Manager, please visit https://support.google.com/analytics/answer/9050852?hl=en.Hotjar. Hotjar may be used to track, capture, and analyze how users interact with our Website. You can learn about Hotjar’s privacy practices at https://www.hotjar.com/legal/policies/privacy/. For information on how you may opt out of the capture and analysis of your Site usage data by Hotjar, please visit https://www.hotjar.com/legal/policies/do-not-track/.",
  " “Other Service Providers:-”. We also use Third Party Providers for marketing, technical, operational, and other services, including as follows: Teacher Users. We use third party yoga professionals to provide the Trainings available through the Service. Royalmindfulness requires that any personal information provided to or collected by Teacher Users in connection with their performance of services for Royalmindfulness is subject to and used in accordance with the terms and conditions of this Privacy Policy.Zoom. We use Zoom to facilitate the conducting of Trainings via video conferencing and the initial storage of Session recordings. You can learn about Zoom’s privacy practices at https://zoom.us/privacy.ClickCease. Firebase may be used to detect and prevent click-fraud. You can learn about ClickCease’s privacy practices at https://www.clickcease.com/privacy.html.Google Ads. Google Ads may be used to develop and enhance our online advertising. You can learn about Google’s privacy practices at https://www.google.com/intl/en/policies/privacy.Facebook. We may use Facebook Ads to enhance and customize our online advertising. You can learn about Facebook’s privacy practices at https://www.facebook.com/privacy/explanation. You can also view your Facebook Ad Preferences under your Facebook settings.Amazon Web Services. When you visit the Site, we may provide certain of your information, as a part of our customer database, to Amazon Web Services in order to facilitate Amazon Web Services’ hosting of the Site and its provisioning of certain infrastructure on which we store our data. You can learn about Amazon Web Services’ privacy practices at https://aws.amazon.com/privacy/?nc1=f_pr.Tableau. Tableau may be used to help us understand data relating to our Site and Service. You can learn about Tableau’s privacy practices at https://www.tableau.com/privacy.Active Campaign. We may use Active Campaign to enhance and customize our Site and Service. You can learn about Active Campaign’s privacy practices at https://www.activecampaign.com/legal/privacy-policy.Use of Anonymized dataNotwithstanding anything else in this Privacy Policy, we may generate anonymized and/or aggregated data (“Anonymized Data”) that does not identify you using your information and may process, use, disclose and share any such Anonymized Data with third parties without restriction. You hereby provide your consent to our ownership, generation, processing, use, sharing, and/or disclosure of any such Anonymized Data.SecurityRoyalmindfulness takes protecting your information seriously, and implements reasonable measures to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to the Service or certain parts of the Site, you are responsible for keeping this password confidential. We ask you not to share your password with anyone. We urge you to be careful about giving out information in public areas of the Site, such as during Sessions, when using message or comment boards, and when using the User Messaging functions. The information you share in public areas may be viewed by any user of the Site (or, in the case of User Messages, by the user that you are messaging). Please use caution in determining what personal information to disclose. Please note that the electronic transmission of information is not completely secure. We cannot guarantee that the security measures we have in place to safeguard information will never be defeated or fail, or that such measures will always be sufficient or effective. Any transmission of information is at your own risk.Information and data transfersThe Service is administered by Royalmindfulness in the United States. When we obtain information about you through your access to or use of the Site or Service or when you input or import information to the Service from somewhere other than the United States, we may transfer, process, and store such information in the United States. If you access the Site and/or Service from outside the United States, you do so on your own initiative, at your sole risk, and you are responsible for compliance with all applicable laws. If you are a non-United States resident and provide us with your personal information, or if you use the Service, you consent to the transfer to and processing of such information in the United States, which may have data protection laws less stringent than those in the country in which you reside.Your choicesWe strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:",
  "(1)Cookies You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of the Site and the Service may then be inaccessible or not function properly. (2)Notifications. The Service may deliver notifications to your mobile device from time to time. You can disable these notifications by changing notification settings on your mobile device.(3)Emails. Royalmindfulness may send Service updates, Service notifications, promotional information and other communications to you via email. Promotional email communications will contain instructions describing how you can opt out of receiving future promotional emails from us. If you opt out of promotional emails, you may continue to receive non-promotional, transactional emails from us.(4)Limiting Provided Information. You can choose not to provide us with certain information. If you decline to provide certain information, however, please note that some features of the Site and/or Service may then be inaccessible.“DO NOT TRACK” RequestsWe adhere to the standards set out in this Privacy Policy and do not monitor or respond to Do Not Track browser requests.Third party applications and websitesThe Site and/or Service may contain links enabling the electronic transfer of data from third-party applications to the Site or Service, as well as links to third-party websites. Royalmindfulness is not responsible for the privacy practices or content of these applications or websites, and linking to an application or website does not constitute endorsement by us of that application or website. You should review the privacy policy and terms and conditions of any such third-party application or website prior to using or providing information to the same.Access to my personal information You may request modification of personal information that you have submitted to us by contacting us at support@royalmindfulness.com or by updating your profile in your user account. Please note that any deletion of your personal information may impact your ability to access and use the Service. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect. If you delete your User Contributions, copies of your User Contributions or correspondence may remain viewable in cached and archived pages, or might have been copied or stored by other users. Proper access and use of information provided on the Site and Service, including User Contributions and correspondence, is governed by our Terms of Use.Your California privacy rights California law grants additional privacy rights to California residents. In particular, the California Consumer Privacy Act (CCPA) requires businesses to disclose, for the past 12 months, (i) the categories of personal information collected, (ii) the sources of the collected personal information, (iii) the purposes for which the collected personal information is used, (iv) the categories of personal information disclosed for a business purpose, and (v) the categories of any personal information sold. Royalmindfulness provides these disclosures in the following table. (Note that Royalmindfulness does not sell any personal information, even under the broad CCPA definition of a “sale.”)",
]

exports.tableData = [
  {
    category: 'Identifiers',
    sources: 'Site visits, creation of accounts and registration for Royalmindfulness products and services',
    purposes: 'For user registration, to enable Royalmindfulness to provide its products and services and to allow Royalmindfulness to communicate with you',
    disclosures: 'To Third Party Providers to assist in providing Royalmindfulness products and services and processing associated payments'
  },
  {
    category: 'Personal information categories listed in the California Customer Records statute',
    sources: 'Creation of accounts and registration to receive Royalmindfulness products and services, submission of payment information ',
    purposes: 'For user registration, to enable Royalmindfulness to provide its products and services and to allow Royalmindfulness to communicate with you',
    disclosures: 'To Third Party Providers to assist in providing Royalmindfulness products and services and processing payments'
  },
  {
    category: 'Protected classification characteristics under California or federal law',
    sources: 'Creation of accounts and registration to receive Royalmindfulness products and services;specific submission by Student Users',
    purposes: 'For user registration, to enable Royalmindfulness to provide its products and services and to allow Royalmindfulness to communicate with you',
    disclosures: 'To Third Party Providers to assist in providing Royalmindfulness products and services'
  },
  {
    category:'Commercial information',
    sources: 'Registration for Royalmindfulness products and services',
    purposes: 'To provide Royalmindfulness products and services to users and maintain purchase history',
    disclosures: 'To Third Party Providers to facilitate delivery of products and services'
  },
  {
    category:'Internet or other electronic network activity',
    sources: 'Your browsing and search history on our Site and Service and other interactions with our Site or Service',
    purposes: 'To improve the user experience on the Site, diagnose server problems and administer the Site, and to improve Service function',
    disclosures: 'To Third Party Providers for the purpose of enhancing the Site and improving the effectiveness of our advertising'
  },
  {
    category:'Sensory data',
    sources: 'Your interactions with our Site and Service, including, without limitation, in connection with your participation in Trainings; recordings of the same',
    purposes: 'To provide, analyze and improve Royalmindfulness products and services',
    disclosures: 'To Third Party Providers to assist in providing and improving Royalmindfulness products and services'
  },
  {
    category:'Geolocation data',
    sources: 'IP address and device data',
    purposes: 'To provide Royalmindfulness products and services and to improve the visitor experience on our Site',
    disclosures: 'To Third Party Providers for the purpose of enhancing our Site and improving the effectiveness of our advertising'
  },
  {
    category:'Inferences drawn from other personal information',
    sources: 'Your browsing and search history on our Site and other interactions with our Site and Service',
    purposes: 'To improve the visitor experience on our Site',
    disclosures: 'To Third Party Providers for the purpose of enhancing our Site and improving the effectiveness of our advertising'
  }
]; 

exports.privacyPolicyTextRemaining = [
  "California residents also have the rights described below. We will not discriminate against any California resident who exercises these rights. Right to access/know your information. You may request from us a list of (i) the personal information that we have collected about you, and (ii) the categories of third parties to whom we have disclosed your personal information. You have the right to up to two (2) access requests each twelve (12) months. Right to delete your information. You may request, at any time, that we delete your information and direct our service providers to delete your information from their records. You may contact us to exercise these rights at support@royalmindfulness.com. To ensure the privacy and protection of individuals, we are required to verify your identity (or that of your authorized agent) or otherwise authenticate your request(s), which we will do in accordance with the CCPA regulations. Please note that, under the CCPA, we are not required to grant a request to access/know or a request to delete with respect to personal information obtained from you in your role as an employee, owner, director, officer or contractor of a company and within the context of Royalmindfulness providing its services to such company.Your European and UK Privacy RightsIf you are a resident of the European Union or the UK, you are entitled to certain information and have certain rights under the GDPR. Those rights include: (i) the right of access to your information.(ii) the right to rectify your information if it is incorrect or incomplete.(ii) the right to have your information erased (“right to be forgotten”) if certain grounds are met.(iv) the right to withdraw your consent to our processing of your information at any time (if our processing is based on consent).(v) the right to object to our processing of your information (if processing is based on legitimate interests).(vi) the right to object to our processing of your information for direct marketing purposes.(vii) the right to receive your information from us in a structured, commonly used and machine-readable format, and the right to transmit your information to another controller without hindrance from us (data portability).(viii) If you are located in the European Union or the UK and you are or have been a user of our services (including the Service), we may send you marketing communications based on our legitimate interests, subject always to your right to opt out of such communications. Further, if you are located in the European Union, we will never share your information with a third party for such third party’s marketing purposes, unless you have specifically consented to us doing so. You may contact us at support@royalmindfulness.com to exercise any of the above rights. We may request specific information from you to confirm your identity, and in some circumstances, we may charge a reasonable fee for access to your information.Furthermore, if you believe that our processing of your information is inconsistent with your data protection rights under the GDPR and we have not adequately addressed your concerns, you have the right to lodge a complaint with the data protection supervisory authority of your country.For purposes of the GDPR, we are a “controller” and you are a “data subject.”Updates to our privacy policy Royalmindfulness reserves the right to change this Privacy Policy at any time. If we make a material change to this Privacy Policy, we will make an effort to communicate these changes to you via email or by posting a notification on the Site. The date this Privacy Policy was last revised is at the top of this page. We encourage you to review this Privacy Policy periodically to check for any updates or changes.Contact us If you have questions about the privacy aspects of our Site or Services or would like to make a complaint, please contact us at support@royalmindfulness.com or write to us at: Royalmindfulness, Inc. RH15, Treasure Town, Indore(M.P), India-452012 logo",
]