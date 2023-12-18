

const FAQPage = () => {
  const faqData = [
    {
      question: "What is the purpose of this health tracker?",
      answer: "Our health tracker is designed to help you monitor and improve your overall well-being. You can track various health metrics, set fitness goals, and receive personalized recommendations for a healthier lifestyle.",
    },
    {
      question: "Is my personal health data safe and secure?",
      answer: "Yes, we take your data privacy seriously. Your personal health information is encrypted and stored securely. We adhere to strict data protection standards to ensure the confidentiality of your information.",
    },
    {
      question: "How can I get started with the health tracker?",
      answer: "To get started, sign up for an account on our platform. Once logged in, you can input your health data, set goals, and begin tracking your progress. Our user-friendly interface makes it easy to navigate and use the tracker.",
    },
    {
      question: "Are there any subscription fees for using the tracker?",
      answer: "We offer both free and premium subscription options. The free plan includes basic features, while the premium plan provides access to advanced analytics, personalized coaching, and additional resources. You can choose the plan that suits your needs.",
    },
    {
      question: "Can I sync my fitness devices with the tracker?",
      answer: "Yes, our health tracker is compatible with various fitness devices and apps. You can sync data from devices like fitness bands, smartwatches, and health apps to centralize your health information in one place.",
    },
    {
      question: "How do I contact customer support?",
      answer: "If you have any questions or need assistance, you can reach our customer support team through the 'Contact Us' page on our website. We're here to help you with any issues or inquiries.",
    },
  ];

  return (

    <div>
      
      <div className="max-w-[85rem] mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {faq.question}
            </h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
   
    </div>
  );
};

export default FAQPage;
