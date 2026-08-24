"use client";

import { FormEvent, useState } from "react";

export function LandingLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setMessage("현재는 화면 시안입니다. 인증 기능은 로그인 모듈에서 연결됩니다.");
  }

  return (
    <form className="space-y-5" noValidate onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="user-id">
          아이디
        </label>
        <div className="field-shell">
          <svg aria-hidden="true" className="size-[18px] shrink-0 text-[var(--quiet)]" fill="none" viewBox="0 0 20 20">
            <circle cx="10" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4.5 16c.7-3 2.53-4.5 5.5-4.5s4.8 1.5 5.5 4.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
          <input
            autoComplete="username"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--quiet)]"
            id="user-id"
            name="userId"
            placeholder="사내 아이디를 입력하세요"
            required
            type="text"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="password">
          비밀번호
        </label>
        <div className="field-shell">
          <svg aria-hidden="true" className="size-[18px] shrink-0 text-[var(--quiet)]" fill="none" viewBox="0 0 20 20">
            <rect height="9" rx="2" stroke="currentColor" strokeWidth="1.5" width="13" x="3.5" y="8" />
            <path d="M6.5 8V6.5a3.5 3.5 0 1 1 7 0V8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <input
            autoComplete="current-password"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--quiet)]"
            id="password"
            minLength={4}
            name="password"
            placeholder="비밀번호를 입력하세요"
            required
            type={showPassword ? "text" : "password"}
          />
          <button
            aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
            aria-pressed={showPassword}
            className="rounded-md p-1 text-[var(--quiet)] transition hover:bg-[var(--soft)] hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
            onClick={() => setShowPassword((current) => !current)}
            type="button"
          >
            {showPassword ? (
              <svg aria-hidden="true" className="size-[18px]" fill="none" viewBox="0 0 20 20">
                <path d="m3 3 14 14M8.2 8.2a2.55 2.55 0 0 0 3.6 3.6M6.1 5.35A8.5 8.5 0 0 1 10 4.4c4.7 0 7.3 5.6 7.3 5.6a12 12 0 0 1-2.05 2.8M4.2 7A13 13 0 0 0 2.7 10s2.6 5.6 7.3 5.6a8.7 8.7 0 0 0 2.1-.26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="size-[18px]" fill="none" viewBox="0 0 20 20">
                <path d="M2.7 10S5.3 4.4 10 4.4s7.3 5.6 7.3 5.6-2.6 5.6-7.3 5.6S2.7 10 2.7 10Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
                <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <label className="flex w-fit cursor-pointer items-center gap-2 text-sm text-[var(--muted)]">
        <input className="size-4 accent-[var(--brand)]" name="rememberId" type="checkbox" />
        아이디 저장
      </label>

      <button
        className="flex h-12 w-full items-center justify-center rounded-xl bg-[var(--brand)] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(22,93,78,0.2)] transition hover:bg-[var(--brand-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] active:translate-y-px"
        type="submit"
      >
        로그인
      </button>

      <p aria-live="polite" className="min-h-5 text-center text-xs leading-5 text-[var(--muted)]" role="status">
        {message}
      </p>
    </form>
  );
}
