import { LandingLoginForm } from "@/features/landing/components/landing-login-form";

const relationshipFlow = ["R&D", "Technology", "Invention", "Patent"];

function PlatformMark() {
  return (
    <span className="flex size-11 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-[0_12px_30px_rgba(22,93,78,0.28)]">
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M6.5 6.5h4v4h-4zm7 7h4v4h-4zm0-7h4v4h-4zm-7 7h4v4h-4z"
          fill="currentColor"
        />
        <path d="M10.5 8.5h3m2 2v3m-5 2h3m-5-5v3" stroke="currentColor" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--canvas)] text-[var(--ink)]">
      <div aria-hidden="true" className="page-grid absolute inset-0" />
      <div aria-hidden="true" className="glow glow-left" />
      <div aria-hidden="true" className="glow glow-right" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-[1440px] lg:grid-cols-[1.08fr_0.92fr]">
        <section className="flex flex-col px-6 py-8 sm:px-10 lg:px-16 lg:py-12 xl:px-24">
          <header className="flex items-center gap-3">
            <PlatformMark />
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">
                R&amp;D–IP Intelligence
              </p>
              <p className="text-sm font-semibold tracking-tight">Patent Development Platform</p>
            </div>
          </header>

          <div className="my-auto max-w-2xl py-16 lg:py-20">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[var(--brand)] shadow-sm backdrop-blur">
              <span className="size-1.5 rounded-full bg-[var(--accent)]" />
              Project-first IP intelligence
            </div>

            <h1 className="max-w-xl text-4xl leading-[1.15] font-semibold tracking-[-0.045em] text-balance sm:text-5xl xl:text-[3.6rem]">
              연구의 가능성을
              <br />
              <span className="text-[var(--brand)]">지식재산의 가치</span>로 연결합니다.
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:text-base">
              R&amp;D 프로젝트부터 기술, 발명, 특허까지 하나의 흐름으로 관리하고
              보호 현황과 다음 행동을 더 빠르게 확인하세요.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-2" aria-label="플랫폼 핵심 흐름">
              {relationshipFlow.map((item, index) => (
                <div className="flex items-center gap-2" key={item}>
                  <span className="rounded-lg border border-[var(--line)] bg-white/75 px-3 py-2 text-xs font-semibold shadow-sm backdrop-blur">
                    {item}
                  </span>
                  {index < relationshipFlow.length - 1 ? (
                    <svg aria-hidden="true" className="size-3.5 text-[var(--quiet)]" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8h10m-3-3 3 3-3 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <footer className="flex items-center gap-2 text-xs text-[var(--quiet)]">
            <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 16 16">
              <path d="M4.5 7V5.5a3.5 3.5 0 1 1 7 0V7M3 7h10v7H3z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            사내 승인 사용자만 접근할 수 있습니다.
          </footer>
        </section>

        <section className="flex items-center justify-center border-t border-[var(--line)] bg-white/55 px-6 py-14 backdrop-blur-sm sm:px-10 lg:border-t-0 lg:border-l lg:px-16 xl:px-24">
          <div className="w-full max-w-[420px]">
            <div className="mb-9">
              <p className="mb-2 text-sm font-semibold text-[var(--brand)]">Welcome back</p>
              <h2 className="text-3xl font-semibold tracking-[-0.035em]">로그인</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                사내 계정으로 플랫폼에 접속하세요.
              </p>
            </div>

            <LandingLoginForm />

            <p className="mt-8 text-center text-xs leading-5 text-[var(--quiet)]">
              계정 관련 문의는 시스템 관리자에게 연락해 주세요.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
