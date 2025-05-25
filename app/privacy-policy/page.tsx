export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-muted-foreground mb-8">
            <strong>Effective Date:</strong> May 25, 2025
          </p>

          <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-6">
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, 
            or contact us. This may include your name, email address, and any other information you choose to provide.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
          <ul className="text-muted-foreground mb-6 list-disc pl-6">
            <li>Provide, maintain, and improve our services</li>
            <li>Send you newsletters and updates about music technology</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Analyze how our website is used to improve user experience</li>
            <li>Protect against fraudulent or illegal activity</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-foreground">3. Information Sharing</h2>
          <p className="text-muted-foreground mb-6">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
            except as described in this privacy policy. We may share your information with trusted service providers who 
            assist us in operating our website and conducting our business.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Storage and Security</h2>
          <p className="text-muted-foreground mb-6">
            We use Firebase and other secure cloud services to store your data. We implement appropriate security measures 
            to protect your personal information against unauthorized access, alteration, disclosure, or destruction. 
            However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-foreground">5. Cookies and Analytics</h2>
          <p className="text-muted-foreground mb-6">
            We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and 
            understand user preferences. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Third-Party Links</h2>
          <p className="text-muted-foreground mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
            content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-foreground">7. Your Rights</h2>
          <p className="text-muted-foreground mb-4">You have the right to:</p>
          <ul className="text-muted-foreground mb-6 list-disc pl-6">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Request data portability</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Children's Privacy</h2>
          <p className="text-muted-foreground mb-6">
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
            information from children under 13. If we learn that we have collected such information, we will take 
            steps to delete it promptly.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-foreground">9. International Users</h2>
          <p className="text-muted-foreground mb-6">
            Our website is operated from the United States. If you are accessing our website from outside the US, 
            please be aware that your information may be transferred to, stored, and processed in the US where our 
            servers are located.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-foreground">10. Changes to This Policy</h2>
          <p className="text-muted-foreground mb-6">
            We may update this privacy policy from time to time. We will notify you of any significant changes by 
            posting the new policy on this page and updating the effective date. Your continued use of our website 
            after any changes indicates your acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contact Us</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <div className="bg-muted p-6 rounded-lg">
            <p className="text-foreground font-medium">DJ TIrna - Music Tech Insider</p>
            <p className="text-muted-foreground">Email: privacy@musictechinsider.com</p>
            <p className="text-muted-foreground">Website: www.musictechinsider.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}
