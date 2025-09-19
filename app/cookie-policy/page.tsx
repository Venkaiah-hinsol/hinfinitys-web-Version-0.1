import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cookie, Settings, Shield, BarChart3, Target, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy - Hinfinity Solutions | How We Use Cookies & Tracking Technologies",
  description:
    "Learn about how Hinfinity Solutions uses cookies and tracking technologies. Understand the types of cookies we use, how to manage your preferences, and your choices regarding cookie consent.",
  keywords: [
    "cookie policy",
    "cookies",
    "tracking technologies",
    "web analytics",
    "cookie consent",
    "privacy preferences",
    "hinfinity solutions cookies",
  ],
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              <Cookie className="h-4 w-4 mr-2" />
              Cookie Information
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">Cookie Policy</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
              This policy explains how we use cookies and similar technologies to enhance your experience on our
              website.
            </p>
            <div className="text-sm text-gray-500">Last updated: January 1, 2025</div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* What Are Cookies */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cookie className="h-6 w-6 text-blue-600" />
                  <span>What Are Cookies?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you
                  visit a website. They are widely used to make websites work more efficiently and to provide
                  information to website owners.
                </p>
                <p>
                  Cookies contain information about your browsing activity and preferences, which helps us improve your
                  experience on our website and provide personalized content and services.
                </p>
                <h3>Types of Cookies</h3>
                <ul>
                  <li>
                    <strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser
                  </li>
                  <li>
                    <strong>Persistent Cookies:</strong> Cookies that remain on your device for a specified period
                  </li>
                  <li>
                    <strong>First-Party Cookies:</strong> Cookies set by our website directly
                  </li>
                  <li>
                    <strong>Third-Party Cookies:</strong> Cookies set by external services we use
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Cookies */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <span>How We Use Cookies</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We use cookies for various purposes to enhance your experience on our website:</p>

                <h3>Essential Website Functionality</h3>
                <ul>
                  <li>Maintaining your session and login status</li>
                  <li>Remembering your preferences and settings</li>
                  <li>Ensuring website security and preventing fraud</li>
                  <li>Enabling core website features and navigation</li>
                </ul>

                <h3>Performance and Analytics</h3>
                <ul>
                  <li>Understanding how visitors use our website</li>
                  <li>Analyzing website traffic and user behavior</li>
                  <li>Identifying popular content and pages</li>
                  <li>Improving website performance and user experience</li>
                </ul>

                <h3>Personalization</h3>
                <ul>
                  <li>Customizing content based on your interests</li>
                  <li>Remembering your language and region preferences</li>
                  <li>Providing relevant recommendations</li>
                  <li>Tailoring our services to your needs</li>
                </ul>

                <h3>Marketing and Advertising</h3>
                <ul>
                  <li>Delivering targeted advertisements</li>
                  <li>Measuring advertising campaign effectiveness</li>
                  <li>Preventing duplicate ad displays</li>
                  <li>Understanding your interests for better targeting</li>
                </ul>
              </CardContent>
            </Card>

            {/* Types of Cookies We Use */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Types of Cookies We Use</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Strictly Necessary Cookies</h3>
                <p>
                  These cookies are essential for the website to function properly. They enable core functionality such
                  as security, network management, and accessibility. You cannot opt out of these cookies.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Examples:</h4>
                  <ul className="mb-0">
                    <li>Session management cookies</li>
                    <li>Authentication cookies</li>
                    <li>Security cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>

                <h3>Performance Cookies</h3>
                <p>
                  These cookies collect information about how visitors use our website, such as which pages are visited
                  most often and if users get error messages from web pages.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Examples:</h4>
                  <ul className="mb-0">
                    <li>Google Analytics cookies</li>
                    <li>Page load time measurement</li>
                    <li>Error tracking cookies</li>
                    <li>A/B testing cookies</li>
                  </ul>
                </div>

                <h3>Functional Cookies</h3>
                <p>
                  These cookies allow the website to remember choices you make and provide enhanced, more personal
                  features.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Examples:</h4>
                  <ul className="mb-0">
                    <li>Language preference cookies</li>
                    <li>Theme selection cookies</li>
                    <li>Form data storage cookies</li>
                    <li>User interface customization</li>
                  </ul>
                </div>

                <h3>Targeting/Advertising Cookies</h3>
                <p>
                  These cookies are used to deliver advertisements more relevant to you and your interests. They may
                  also be used to limit the number of times you see an advertisement.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Examples:</h4>
                  <ul className="mb-0">
                    <li>Social media advertising pixels</li>
                    <li>Retargeting cookies</li>
                    <li>Interest-based advertising</li>
                    <li>Campaign tracking cookies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Cookies */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                  <span>Third-Party Cookies and Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We use various third-party services that may set cookies on your device. These services help us
                  provide better functionality and understand how our website is used.
                </p>

                <h3>Analytics Services</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Google Analytics</h4>
                  <p className="text-sm mb-2">
                    We use Google Analytics to understand how visitors interact with our website. This service uses
                    cookies to collect information about your usage patterns.
                  </p>
                  <p className="text-sm mb-0">
                    <strong>Privacy Policy:</strong>{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Google Privacy Policy
                    </a>
                  </p>
                </div>

                <h3>Social Media Integration</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Social Media Platforms</h4>
                  <p className="text-sm mb-2">
                    Our website may include social media features and widgets from platforms like LinkedIn, Twitter, and
                    Facebook. These features may collect information about your visit.
                  </p>
                  <ul className="text-sm mb-0">
                    <li>
                      <a
                        href="https://www.linkedin.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        LinkedIn Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Twitter Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/privacy/explanation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Facebook Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>

                <h3>Customer Support</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Live Chat and Support Tools</h4>
                  <p className="text-sm mb-0">
                    We may use third-party customer support tools that set cookies to provide chat functionality and
                    track support interactions.
                  </p>
                </div>

                <h3>Content Delivery</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">CDN Services</h4>
                  <p className="text-sm mb-0">
                    We use content delivery networks (CDNs) to improve website performance. These services may set
                    cookies for optimization purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Managing Cookie Preferences */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <span>Managing Your Cookie Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Cookie Consent Banner</h3>
                <p>
                  When you first visit our website, you'll see a cookie consent banner that allows you to accept all
                  cookies, reject non-essential cookies, or customize your preferences.
                </p>

                <h3>Changing Your Preferences</h3>
                <p>You can change your cookie preferences at any time by:</p>
                <ul>
                  <li>Clicking on the cookie settings link in our website footer</li>
                  <li>Using the cookie preference center when it appears</li>
                  <li>Contacting us directly with your preferences</li>
                </ul>

                <h3>Browser Settings</h3>
                <p>You can also control cookies through your browser settings. Most browsers allow you to:</p>
                <ul>
                  <li>View and delete cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear all cookies when you close the browser</li>
                  <li>Set up notifications when cookies are being set</li>
                </ul>

                <h3>Browser-Specific Instructions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Chrome</h4>
                    <p className="text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Firefox</h4>
                    <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Safari</h4>
                    <p className="text-sm">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Edge</h4>
                    <p className="text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                  </div>
                </div>

                <h3>Impact of Disabling Cookies</h3>
                <p>Please note that disabling certain cookies may affect the functionality of our website:</p>
                <ul>
                  <li>Some features may not work properly</li>
                  <li>Your preferences may not be remembered</li>
                  <li>You may need to re-enter information repeatedly</li>
                  <li>Personalized content may not be available</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookie Retention */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  <span>Cookie Retention and Expiration</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Retention Periods</h3>
                <p>Different types of cookies have different retention periods:</p>

                <div className="space-y-4 not-prose">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Session Cookies</h4>
                    <p className="text-sm mb-1">
                      <strong>Duration:</strong> Until browser is closed
                    </p>
                    <p className="text-sm">These cookies are automatically deleted when you close your browser.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Functional Cookies</h4>
                    <p className="text-sm mb-1">
                      <strong>Duration:</strong> 30 days to 2 years
                    </p>
                    <p className="text-sm">These cookies remember your preferences and settings for future visits.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                    <p className="text-sm mb-1">
                      <strong>Duration:</strong> 2 years
                    </p>
                    <p className="text-sm">These cookies help us understand website usage patterns over time.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                    <p className="text-sm mb-1">
                      <strong>Duration:</strong> 30 days to 1 year
                    </p>
                    <p className="text-sm">These cookies track your interests for advertising purposes.</p>
                  </div>
                </div>

                <h3>Automatic Expiration</h3>
                <p>
                  All cookies have expiration dates and will be automatically deleted when they expire. You can also
                  manually delete cookies at any time through your browser settings.
                </p>

                <h3>Cookie Refresh</h3>
                <p>
                  Some cookies may be refreshed or renewed when you visit our website again, extending their expiration
                  date. This helps maintain functionality and preferences across visits.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Your Rights and Choices</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Consent</h3>
                <p>
                  You have the right to give or withdraw your consent for non-essential cookies at any time. Your
                  consent is not required for strictly necessary cookies that are essential for website functionality.
                </p>

                <h3>Access and Control</h3>
                <p>You have the right to:</p>
                <ul>
                  <li>Know what cookies are being set on your device</li>
                  <li>Understand how cookies are being used</li>
                  <li>Control which cookies are set</li>
                  <li>Delete cookies from your device</li>
                  <li>Opt out of cookie-based tracking</li>
                </ul>

                <h3>Opt-Out Options</h3>
                <p>For specific types of tracking, you can opt out through:</p>
                <ul>
                  <li>
                    <strong>Google Analytics:</strong>{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Google Analytics Opt-out Browser Add-on
                    </a>
                  </li>
                  <li>
                    <strong>Interest-based Advertising:</strong>{" "}
                    <a
                      href="http://www.aboutads.info/choices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Digital Advertising Alliance
                    </a>
                  </li>
                  <li>
                    <strong>Network Advertising:</strong>{" "}
                    <a
                      href="http://www.networkadvertising.org/choices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Network Advertising Initiative
                    </a>
                  </li>
                </ul>

                <h3>Do Not Track</h3>
                <p>
                  Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have
                  your online activities tracked. We currently do not respond to Do Not Track signals, but we respect
                  your cookie preferences as set through our consent banner.
                </p>
              </CardContent>
            </Card>

            {/* Updates to Cookie Policy */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <span>Updates to This Cookie Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>Policy Changes</h3>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices, technology,
                  legal requirements, or other factors.
                </p>

                <h3>Notification of Changes</h3>
                <p>When we make significant changes to this policy, we will:</p>
                <ul>
                  <li>Post the updated policy on our website</li>
                  <li>Update the "Last updated" date at the top of this page</li>
                  <li>Notify you through our website banner or email (for material changes)</li>
                  <li>Request renewed consent if required by law</li>
                </ul>

                <h3>Continued Use</h3>
                <p>
                  Your continued use of our website after any changes to this Cookie Policy constitutes your acceptance
                  of the updated policy.
                </p>

                <h3>Review Regularly</h3>
                <p>
                  We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies
                  and how you can manage your preferences.
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
                <p>If you have any questions about this Cookie Policy or our use of cookies, please contact us:</p>

                <div className="bg-gray-50 p-6 rounded-lg not-prose">
  <h3 className="text-lg font-semibold text-gray-900 mb-4">
    Hinfinity Solutions Private Limited
  </h3>
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
      <strong>Cookie Questions:</strong>{' '}
      <a href="mailto:admin@hinfinitys.com" className="text-blue-600 hover:underline">
        admin@hinfinitys.com
      </a>
    </p>
  </div>
</div>


                <p>
                  We will respond to your inquiries about cookies and help you manage your preferences. Our team is
                  committed to transparency and will provide clear information about our cookie practices.
                </p>

                <h3>Additional Resources</h3>
                <p>For more information about cookies and online privacy, you can visit:</p>
                <ul>
                  <li>
                    <a
                      href="https://www.allaboutcookies.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      All About Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ico.org.uk/for-the-public/online/cookies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      ICO Cookie Guidance
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.cookiepro.com/knowledge/what-are-cookies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Cookie Education Resources
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
