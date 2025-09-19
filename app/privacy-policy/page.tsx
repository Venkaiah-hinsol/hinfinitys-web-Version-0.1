import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Users, Globe, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Hinfinity Solutions | Data Protection & Privacy Rights",
  description:
    "Learn how Hinfinity Solutions protects your personal data and privacy. Our comprehensive privacy policy covers data collection, usage, storage, and your rights under GDPR and other privacy laws.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "personal data",
    "privacy rights",
    "data security",
    "hinfinity solutions privacy",
  ],
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              <Shield className="h-4 w-4 mr-2" />
              Privacy & Data Protection
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">Privacy Policy</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
            </p>
            <div className="text-sm text-gray-500">Last updated: January 1, 2025</div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-blue-600" />
                  <span>Introduction</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Hinfinity Solutions Private Limited ("we," "our," or "us") is committed to protecting your privacy and
                  ensuring the security of your personal information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our website, use our services, or interact
                  with us.
                </p>
                <p>
                  By accessing or using our services, you agree to the collection and use of information in accordance
                  with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span>Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Personal Information</h3>
                <p>We may collect the following types of personal information:</p>
                <ul>
                  <li>
                    <strong>Contact Information:</strong> Name, email address, phone number, mailing address
                  </li>
                  <li>
                    <strong>Professional Information:</strong> Company name, job title, industry, business requirements
                  </li>
                  <li>
                    <strong>Account Information:</strong> Username, password, preferences, and settings
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Messages, feedback, and correspondence with us
                  </li>
                </ul>

                <h3>Technical Information</h3>
                <p>We automatically collect certain technical information when you use our services:</p>
                <ul>
                  <li>
                    <strong>Device Information:</strong> IP address, browser type, operating system, device identifiers
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Pages visited, time spent, clicks, navigation patterns
                  </li>
                  <li>
                    <strong>Cookies and Tracking:</strong> Information collected through cookies and similar
                    technologies
                  </li>
                  <li>
                    <strong>Log Data:</strong> Server logs, error reports, and performance metrics
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-6 w-6 text-blue-600" />
                  <span>How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We use the collected information for the following purposes:</p>

                <h3>Service Provision</h3>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and deliver requested services</li>
                  <li>Customize and personalize your experience</li>
                  <li>Provide customer support and technical assistance</li>
                </ul>

                <h3>Communication</h3>
                <ul>
                  <li>Send service-related notifications and updates</li>
                  <li>Respond to inquiries and provide customer support</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Conduct surveys and gather feedback</li>
                </ul>

                <h3>Business Operations</h3>
                <ul>
                  <li>Analyze usage patterns and improve our services</li>
                  <li>Conduct research and development</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <span>Information Sharing and Disclosure</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information in the following circumstances:
                </p>

                <h3>Service Providers</h3>
                <p>We may share information with trusted third-party service providers who assist us in:</p>
                <ul>
                  <li>Cloud hosting and data storage</li>
                  <li>Payment processing</li>
                  <li>Email and communication services</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Customer support tools</li>
                </ul>

                <h3>Legal Requirements</h3>
                <p>We may disclose information when required by law or to:</p>
                <ul>
                  <li>Comply with legal processes or government requests</li>
                  <li>Protect our rights, property, or safety</li>
                  <li>Prevent fraud or security threats</li>
                  <li>Enforce our terms of service</li>
                </ul>

                <h3>Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part
                  of the business transaction.
                </p>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Data Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>

                <h3>Technical Safeguards</h3>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure server infrastructure and firewalls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                </ul>

                <h3>Organizational Measures</h3>
                <ul>
                  <li>Employee training on data protection</li>
                  <li>Confidentiality agreements with staff and contractors</li>
                  <li>Regular security audits and compliance reviews</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>

                <p>
                  While we strive to protect your information, no method of transmission over the internet or electronic
                  storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your
                  data using industry best practices.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span>Your Privacy Rights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>

                <h3>Access and Portability</h3>
                <ul>
                  <li>Request access to your personal information</li>
                  <li>Obtain a copy of your data in a portable format</li>
                  <li>Request information about how your data is processed</li>
                </ul>

                <h3>Correction and Updates</h3>
                <ul>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Update your personal details and preferences</li>
                  <li>Modify your communication preferences</li>
                </ul>

                <h3>Deletion and Restriction</h3>
                <ul>
                  <li>Request deletion of your personal information</li>
                  <li>Restrict processing of your data</li>
                  <li>Object to certain types of processing</li>
                </ul>

                <h3>Exercising Your Rights</h3>
                <p>
                  To exercise any of these rights, please contact us using the information provided in the "Contact Us"
                  section. We will respond to your request within the timeframe required by applicable law.
                </p>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-blue-600" />
                  <span>Cookies and Tracking Technologies</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We use cookies and similar tracking technologies to enhance your experience on our website:</p>

                <h3>Types of Cookies</h3>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Remember your preferences and settings
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used for targeted advertising and marketing
                  </li>
                </ul>

                <h3>Managing Cookies</h3>
                <p>
                  You can control cookies through your browser settings or our cookie consent banner. Please note that
                  disabling certain cookies may affect the functionality of our website.
                </p>

                <p>For more detailed information about our use of cookies, please refer to our Cookie Policy.</p>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <span>International Data Transfers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Your information may be transferred to and processed in countries other than your country of
                  residence. These countries may have different data protection laws than your country.
                </p>
                <p>
                  When we transfer your information internationally, we ensure appropriate safeguards are in place, such
                  as:
                </p>
                <ul>
                  <li>Standard contractual clauses approved by regulatory authorities</li>
                  <li>Adequacy decisions by relevant data protection authorities</li>
                  <li>Certification schemes and codes of conduct</li>
                  <li>Other legally recognized transfer mechanisms</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-6 w-6 text-blue-600" />
                  <span>Data Retention</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this policy, unless a longer retention period is required or permitted by law.
                </p>

                <h3>Retention Periods</h3>
                <ul>
                  <li>
                    <strong>Account Information:</strong> Retained while your account is active and for a reasonable
                    period after closure
                  </li>
                  <li>
                    <strong>Transaction Data:</strong> Retained for accounting and legal compliance purposes (typically
                    7 years)
                  </li>
                  <li>
                    <strong>Marketing Data:</strong> Retained until you withdraw consent or opt out
                  </li>
                  <li>
                    <strong>Technical Data:</strong> Retained for security and performance analysis (typically 2 years)
                  </li>
                </ul>

                <p>
                  When we no longer need your information, we will securely delete or anonymize it in accordance with
                  our data retention policies.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Children's Privacy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Our services are not intended for children under the age of 16. We do not knowingly collect personal
                  information from children under 16. If we become aware that we have collected personal information
                  from a child under 16, we will take steps to delete such information promptly.
                </p>
                <p>
                  If you are a parent or guardian and believe that your child has provided us with personal information,
                  please contact us immediately.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-blue-600" />
                  <span>Changes to This Privacy Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                  legal requirements, or other factors. We will notify you of any material changes by:
                </p>
                <ul>
                  <li>Posting the updated policy on our website</li>
                  <li>Sending you an email notification (if you have provided your email address)</li>
                  <li>Displaying a prominent notice on our website</li>
                </ul>
                <p>
                  Your continued use of our services after any changes indicates your acceptance of the updated Privacy
                  Policy.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <span>Contact Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>

                <div className="bg-gray-50 p-6 rounded-lg not-prose">
  <h3 className="text-lg font-semibold text-gray-900 mb-4">Hinfinity Solutions Private Limited</h3>
  <div className="space-y-2 text-gray-600">
    <p>
      <strong>Email:</strong>{' '}
      <a href="mailto:info@hinfinitys.com" className="text-blue-600 hover:underline">
        info@hinfinitys.com
      </a>
    </p>
    <p>
      <strong>Phone:</strong>{' '}
      <a href="tel:+919888933317" className="text-blue-600 hover:underline">
        +91-9888 9333 17
      </a>
    </p>
    <p>
      <strong>Address:</strong> 4th Floor, Unit No 405-411, Bizness Square, Jubliee Enclave, Madhapur, Hyderabad, IN-500081
    </p>
    <p>
      <strong>Data Protection Officer:</strong>{' '}
      <a href="mailto:connect@hinfinitys.com" className="text-blue-600 hover:underline">
        connect@hinfinitys.com
      </a>
    </p>
  </div>
</div>


                <p>
                  We are committed to resolving any privacy concerns you may have and will respond to your inquiries
                  within a reasonable timeframe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
