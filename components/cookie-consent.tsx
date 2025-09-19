"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { X, Cookie, Settings, Shield, BarChart3, Zap } from "lucide-react"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(onlyNecessary)
    localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary))
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setIsVisible(false)
  }

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return // Cannot disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: value }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-in-left">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Cookie className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Cookie Preferences</h3>
            </div>
            <button onClick={() => setIsVisible(false)} className="text-white/80 hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showSettings ? (
            // Simple consent view
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn
                more in our{" "}
                <a href="/cookie-policy" className="text-blue-600 hover:underline">
                  Cookie Policy
                </a>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleAcceptAll} className="cta-primary flex-1">
                  Accept All Cookies
                </Button>
                <Button onClick={handleRejectAll} variant="outline" className="flex-1 bg-transparent">
                  Reject All
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="outline"
                  className="flex items-center justify-center"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Customize
                </Button>
              </div>
            </div>
          ) : (
            // Detailed settings view
            <div>
              <p className="text-gray-600 mb-6">
                Choose which cookies you want to accept. You can change these settings at any time.
              </p>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <h4 className="font-medium text-gray-900">Necessary Cookies</h4>
                      <Badge variant="secondary" className="text-xs">
                        Always Active
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      Essential for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                  <Switch checked={preferences.necessary} disabled className="ml-4" />
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                      <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Help us understand how visitors interact with our website by collecting anonymous information.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => handlePreferenceChange("analytics", checked)}
                    className="ml-4"
                  />
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="h-4 w-4 text-purple-600" />
                      <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Used to deliver personalized advertisements and track advertising campaign performance.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => handlePreferenceChange("marketing", checked)}
                    className="ml-4"
                  />
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Settings className="h-4 w-4 text-orange-600" />
                      <h4 className="font-medium text-gray-900">Functional Cookies</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Enable enhanced functionality and personalization, such as remembering your preferences.
                    </p>
                  </div>
                  <Switch
                    checked={preferences.functional}
                    onCheckedChange={(checked) => handlePreferenceChange("functional", checked)}
                    className="ml-4"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleSavePreferences} className="cta-primary flex-1">
                  Save Preferences
                </Button>
                <Button onClick={handleAcceptAll} variant="outline" className="flex-1 bg-transparent">
                  Accept All
                </Button>
                <Button onClick={() => setShowSettings(false)} variant="ghost">
                  Back
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
