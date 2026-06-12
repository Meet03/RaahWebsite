import PageHero from '../components/PageHero'

interface LegalProps {
  kind: 'privacy' | 'terms'
}

export default function Legal({ kind }: LegalProps) {
  const isPrivacy = kind === 'privacy'
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
        subtitle={isPrivacy ? 'How we collect, use, and protect your information.' : 'The terms governing use of this website and our services.'}
      />
      <section className="py-24">
        <div className="mx-auto max-w-3xl space-y-6 px-4 leading-relaxed text-slate-600 dark:text-slate-400 sm:px-6 lg:px-8">
          {isPrivacy ? (
            <>
              <p>
                RAAH Technologies respects your privacy. We collect only the information you submit
                through forms or communications with us — such as your name, work email, company, and
                message contents — and use it solely to respond to your inquiry and provide our
                services.
              </p>
              <p>
                You may request to access, correct, or delete your personal data at any time by
                contacting us at info@raahtech.com. We do not sell your personal information to third
                parties.
              </p>
              <p className="text-sm italic">
                This is placeholder copy for the redesign preview. The final policy text should be
                provided by RAAH Technologies' legal team before launch.
              </p>
            </>
          ) : (
            <>
              <p>
                By accessing this website you agree to use it for lawful purposes only. All content,
                trademarks, and materials on this site are the property of RAAH Technologies unless
                otherwise noted, and may not be reproduced without permission.
              </p>
              <p>
                Information on this site is provided for general informational purposes and does not
                constitute professional advice. Service engagements are governed by their own written
                agreements.
              </p>
              <p className="text-sm italic">
                This is placeholder copy for the redesign preview. The final terms should be provided
                by RAAH Technologies' legal team before launch.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  )
}
