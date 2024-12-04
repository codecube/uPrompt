import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <section className="text-center mb-12 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Craft Perfect AI Prompts with uPrompt
        </h1>
        <p className="text-xl mb-8 text-muted-foreground">
          Unleash the power of AI with our intuitive prompt builder. Create, manage, and optimize your prompts effortlessly.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/app">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </section>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {[
          { icon: Zap, title: "Lightning Fast", description: "Build prompts in seconds with our intuitive interface" },
          { icon: Shield, title: "Secure & Private", description: "Your prompts are encrypted and never shared" },
          { icon: Clock, title: "Time-Saving", description: "Access a library of templates to jumpstart your creativity" },
        ].map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg">
            <feature.icon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          {[
            { name: 'Free', price: '$0/month', features: ['Basic prompt building', 'Template library access', 'Limited history'] },
            { name: 'Pro', price: '$9.99/month', features: ['Advanced prompt building', 'Custom block creation', 'Unlimited history', 'Priority support'] },
            { name: 'Team', price: '$29.99/month', features: ['All Pro features', 'Team collaboration', 'Admin dashboard', 'API access'] },
          ].map((plan) => (
            <div key={plan.name} className="border border-primary rounded-lg p-6 text-center bg-secondary">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-left mb-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

