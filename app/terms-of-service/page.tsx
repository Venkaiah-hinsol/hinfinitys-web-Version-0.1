import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, AlertTriangle, Users, Globe, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Hinfinity Solutions | Legal Terms & Conditions",
  description:
    "Read the terms of service for Hinfinity Solutions. Understand your rights and obligations when using our SLATE Platform, DevOps services, and other technology solutions.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "legal agreement",
    "user agreement",
    "service terms",
    "hinfinity solutions terms",
  ],
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              <FileText className="h-4 w-4 mr-2" />
              Legal Agreement
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">Terms of Service</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
              Please read these terms carefully before using our services. By using our services, you agree to be bound
              by these terms.
            </p>
            <div className="text-sm text-gray-500">Last updated: January 1, 2025</div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Agreement to Terms */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Agreement to Terms</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or
                  "your") and Hinfinity Solutions Private Limited ("Company," "we," "us," or "our") regarding your use
                  of our website, services, and products.
                </p>
                <p>
                  By accessing or using our services, you acknowledge that you have read, understood, and agree to be
                  bound by these Terms. If you do not agree to these Terms, please do not use our services.
                </p>
                <p>
                  These Terms apply to all users of our services, including but not limited to visitors, customers, and
                  other users who access or use our services.
                </p>
              </CardContent>
            </Card>

            {/* Description of Services */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <span>Description of Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Hinfinity Solutions provides the following services:</p>

                <h3>SLATE Platform</h3>
                <ul>
                  <li>No-code/low-code application development platform</li>
                  <li>Cloud-based development environment</li>
                  <li>Application deployment and hosting services</li>
                  <li>Platform maintenance and support</li>
                </ul>

                <h3>DevOps Consulting</h3>
                <ul>
                  <li>Cloud migration and infrastructure setup</li>
                  <li>CI/CD pipeline implementation</li>
                  <li>Container orchestration and management</li>
                  <li>Performance optimization and monitoring</li>
                </ul>

                <h3>Custom Software Development</h3>
                <ul>
                  <li>Web and mobile application development</li>
                  <li>AI/ML solution implementation</li>
                  <li>System integration and API development</li>
                  <li>Maintenance and support services</li>
                </ul>

                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with
                  or without notice.
                </p>
              </CardContent>
            </Card>

            {/* User Accounts */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span>User Accounts and Registration</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Account Creation</h3>
                <p>
                  To access certain features of our services, you may be required to create an account. When creating an
                  account, you agree to:
                </p>
                <ul>
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information as necessary</li>
                  <li>Keep your account credentials secure and confidential</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>

                <h3>Account Responsibilities</h3>
                <ul>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You must notify us immediately of any unauthorized use</li>
                  <li>You may not share your account with others</li>
                  <li>You may not create multiple accounts without permission</li>
                </ul>

                <h3>Account Termination</h3>
                <p>
                  We reserve the right to suspend or terminate your account at any time for violation of these Terms or
                  for any other reason at our sole discretion.
                </p>
              </CardContent>
            </Card>

            {/* Acceptable Use */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Acceptable Use Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Permitted Uses</h3>
                <p>
                  You may use our services for lawful business and personal purposes in accordance with these Terms.
                </p>

                <h3>Prohibited Uses</h3>
                <p>You agree not to use our services to:</p>
                <ul>
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our services for competitive intelligence or benchmarking</li>
                  <li>Reverse engineer, decompile, or disassemble our software</li>
                  <li>Remove or modify any proprietary notices or labels</li>
                  <li>Use our services to develop competing products or services</li>
                </ul>

                <h3>Content Standards</h3>
                <p>Any content you submit or upload must:</p>
                <ul>
                  <li>Be accurate and not misleading</li>
                  <li>Not infringe on intellectual property rights</li>
                  <li>Not contain malicious code or viruses</li>
                  <li>Comply with applicable privacy and data protection laws</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Intellectual Property Rights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Our Intellectual Property</h3>
                <p>
                  All content, features, and functionality of our services, including but not limited to text, graphics,
                  logos, icons, images, audio clips, video clips, data compilations, and software, are the exclusive
                  property of Hinfinity Solutions or its licensors and are protected by copyright, trademark, patent,
                  trade secret, and other intellectual property laws.
                </p>

                <h3>Your Content</h3>
                <p>
                  You retain ownership of any intellectual property rights in content you submit to our services.
                  However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use,
                  reproduce, modify, and distribute your content solely for the purpose of providing our services.
                </p>

                <h3>Feedback</h3>
                <p>
                  Any feedback, suggestions, or ideas you provide to us regarding our services become our property, and
                  we may use them without restriction or compensation to you.
                </p>

                <h3>DMCA Compliance</h3>
                <p>
                  We respect intellectual property rights and will respond to valid DMCA takedown notices. If you
                  believe your copyrighted work has been infringed, please contact us with the required information.
                </p>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Payment Terms and Billing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Fees and Charges</h3>
                <p>
                  Certain services may require payment of fees. All fees are stated in the applicable currency and are
                  non-refundable unless otherwise specified in writing.
                </p>

                <h3>Payment Methods</h3>
                <p>We accept the following payment methods:</p>
                <ul>
                  <li>Credit and debit cards</li>
                  <li>Bank transfers</li>
                  <li>Digital payment platforms</li>
                  <li>Other methods as specified in your service agreement</li>
                </ul>

                <h3>Billing and Invoicing</h3>
                <ul>
                  <li>Fees are billed in advance for subscription services</li>
                  <li>One-time fees are due upon service completion or as agreed</li>
                  <li>Invoices are sent electronically unless otherwise requested</li>
                  <li>Payment is due within 30 days of invoice date unless otherwise specified</li>
                </ul>

                <h3>Late Payments</h3>
                <p>
                  Late payments may result in service suspension and additional charges. We reserve the right to charge
                  interest on overdue amounts at the rate of 1.5% per month or the maximum rate permitted by law,
                  whichever is lower.
                </p>
              </CardContent>
            </Card>

            {/* Service Level Agreement */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <span>Service Level Agreement</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Availability</h3>
                <p>
                  We strive to maintain 99.9% uptime for our services, excluding scheduled maintenance windows.
                  Scheduled maintenance will be announced in advance when possible.
                </p>

                <h3>Support</h3>
                <p>We provide support through the following channels:</p>
                <ul>
                  <li>Email support during business hours</li>
                  <li>Online documentation and knowledge base</li>
                  <li>Phone support for premium customers</li>
                  <li>Emergency support for critical issues</li>
                </ul>

                <h3>Response Times</h3>
                <ul>
                  <li>
                    <strong>Critical Issues:</strong> 2 hours
                  </li>
                  <li>
                    <strong>High Priority:</strong> 8 hours
                  </li>
                  <li>
                    <strong>Medium Priority:</strong> 24 hours
                  </li>
                  <li>
                    <strong>Low Priority:</strong> 72 hours
                  </li>
                </ul>

                <h3>Service Credits</h3>
                <p>
                  In the event of service downtime exceeding our SLA commitments, eligible customers may receive service
                  credits as specified in their service agreement.
                </p>
              </CardContent>
            </Card>

            {/* Privacy and Data Protection */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Privacy and Data Protection</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Privacy Policy</h3>
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                  information. By using our services, you also agree to our Privacy Policy.
                </p>

                <h3>Data Security</h3>
                <p>We implement appropriate security measures to protect your data, including:</p>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                </ul>

                <h3>Data Processing</h3>
                <p>
                  We process your data in accordance with applicable data protection laws, including GDPR where
                  applicable. You have rights regarding your personal data as outlined in our Privacy Policy.
                </p>

                <h3>Data Retention</h3>
                <p>
                  We retain your data only as long as necessary to provide our services and comply with legal
                  obligations. Data retention periods are specified in our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimers and Warranties */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                  <span>Disclaimers and Warranties</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Service Warranty</h3>
                <p>
                  We warrant that our services will perform substantially in accordance with our documentation. This
                  warranty is subject to your proper use of the services and does not cover issues arising from misuse,
                  modifications, or third-party integrations.
                </p>

                <h3>Disclaimer of Warranties</h3>
                <p>
                  EXCEPT AS EXPRESSLY SET FORTH HEREIN, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>

                <h3>Third-Party Services</h3>
                <p>
                  Our services may integrate with or rely on third-party services. We do not warrant the performance,
                  availability, or security of third-party services and are not responsible for any issues arising from
                  their use.
                </p>

                <h3>Data Accuracy</h3>
                <p>
                  While we strive to ensure data accuracy, we do not warrant that all information provided through our
                  services is accurate, complete, or current. You are responsible for verifying the accuracy of any data
                  before relying on it.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                  <span>Limitation of Liability</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Limitation of Damages</h3>
                <p>
                  IN NO EVENT SHALL HINFINITY SOLUTIONS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
                  INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OUR SERVICES.
                </p>

                <h3>Maximum Liability</h3>
                <p>
                  OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES
                  SHALL NOT EXCEED THE AMOUNT YOU PAID TO US FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE
                  CLAIM.
                </p>

                <h3>Exceptions</h3>
                <p>
                  The limitations in this section do not apply to liability for death or personal injury caused by our
                  negligence, fraud, or other liability that cannot be excluded or limited by applicable law.
                </p>

                <h3>Indemnification</h3>
                <p>
                  You agree to indemnify and hold harmless Hinfinity Solutions from any claims, damages, or expenses
                  arising from your use of our services, violation of these Terms, or infringement of any third-party
                  rights.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Termination</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Termination by You</h3>
                <p>
                  You may terminate your account and stop using our services at any time by contacting us or following
                  the cancellation process outlined in your service agreement.
                </p>

                <h3>Termination by Us</h3>
                <p>We may terminate or suspend your access to our services immediately, without prior notice, for:</p>
                <ul>
                  <li>Violation of these Terms</li>
                  <li>Non-payment of fees</li>
                  <li>Suspected fraudulent or illegal activity</li>
                  <li>Extended periods of inactivity</li>
                  <li>Any other reason at our sole discretion</li>
                </ul>

                <h3>Effect of Termination</h3>
                <p>Upon termination:</p>
                <ul>
                  <li>Your right to use our services will cease immediately</li>
                  <li>We may delete your account and data after a reasonable period</li>
                  <li>You remain liable for all charges incurred before termination</li>
                  <li>Provisions that should survive termination will remain in effect</li>
                </ul>

                <h3>Data Export</h3>
                <p>
                  Upon request and subject to technical feasibility, we will provide you with a copy of your data in a
                  standard format within 30 days of termination.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <span>Governing Law and Dispute Resolution</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                  its conflict of law provisions.
                </p>

                <h3>Jurisdiction</h3>
                <p>
                  Any disputes arising out of or relating to these Terms or our services shall be subject to the
                  exclusive jurisdiction of the courts in Hyderabad, India.
                </p>

                <h3>Dispute Resolution</h3>
                <p>Before pursuing formal legal action, we encourage you to:</p>
                <ul>
                  <li>Contact us directly to resolve the issue informally</li>
                  <li>Participate in good faith negotiations</li>
                  <li>Consider mediation or arbitration if appropriate</li>
                </ul>

                <h3>Class Action Waiver</h3>
                <p>
                  You agree that any dispute resolution proceedings will be conducted only on an individual basis and
                  not in a class, consolidated, or representative action.
                </p>
              </CardContent>
            </Card>

            {/* General Provisions */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>General Provisions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Entire Agreement</h3>
                <p>
                  These Terms, together with our Privacy Policy and any applicable service agreements, constitute the
                  entire agreement between you and us regarding our services.
                </p>

                <h3>Modifications</h3>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by
                  posting the updated Terms on our website or sending you an email notification.
                </p>

                <h3>Severability</h3>
                <p>
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in
                  full force and effect.
                </p>

                <h3>Waiver</h3>
                <p>
                  Our failure to enforce any provision of these Terms shall not be deemed a waiver of such provision or
                  our right to enforce it in the future.
                </p>

                <h3>Assignment</h3>
                <p>
                  You may not assign or transfer your rights under these Terms without our prior written consent. We may
                  assign our rights and obligations under these Terms without restriction.
                </p>

                <h3>Force Majeure</h3>
                <p>
                  We shall not be liable for any failure or delay in performance due to circumstances beyond our
                  reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, or
                  government actions.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>If you have any questions about these Terms of Service, please contact us:</p>

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
      <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
    </p>
  </div>
</div>


                <p>
                  We will respond to your inquiries within a reasonable timeframe and work with you to resolve any
                  concerns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
