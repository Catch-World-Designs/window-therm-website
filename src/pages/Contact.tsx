import { useMemo, useRef, useState, type ChangeEvent, type DragEvent, type FormEvent } from "react";
import { business, clipById, services, social } from "@/data/site";
import { CineVideo } from "@/components/Video";
import { PageHero } from "@/components/Layout";
import { Btn, Eyebrow, GoldRule, Reveal, SectionHead } from "@/components/Primitives";
import {
  IconArrow,
  IconCheck,
  IconClose,
  IconMail,
  IconPhone,
  IconPin,
  IconUpload,
  socialIcons,
} from "@/components/Icons";
import { cn } from "@/utils/cn";

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  windows: string;
  sizes: string;
  message: string;
};

const empty: Form = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  windows: "",
  sizes: "",
  message: "",
};

const fieldBase =
  "w-full rounded-[4px] border bg-ink px-4 py-3.5 text-[0.95rem] text-bone placeholder:text-ash-dim/70 transition-all duration-300 focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState<Form>(empty);
  const [files, setFiles] = useState<{ name: string; url: string }[]>([]);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sent, setSent] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const set = (k: keyof Form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const mailto = useMemo(() => {
    const subject = `Window insert enquiry — ${form.firstName} ${form.lastName}`.trim();
    const body = [
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Address / ZIP: ${form.location}`,
      `Number of windows needed: ${form.windows}`,
      `Window sizes: ${form.sizes || "—"}`,
      `Photos attached: ${files.length ? files.map((f) => f.name).join(", ") : "—"}`,
      "",
      form.message || "—",
    ].join("\n");
    return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form, files]);

  const validate = () => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (!form.firstName.trim()) e.firstName = "Please add your first name.";
    if (!form.lastName.trim()) e.lastName = "Please add your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Please add a valid email address.";
    if (form.phone.replace(/\D/g, "").length < 7) e.phone = "Please add a phone number.";
    if (!form.windows.trim()) e.windows = "How many windows do you need?";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      const first = document.querySelector<HTMLElement>("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSent(true);
  };

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const next = Array.from(list)
      .filter((f) => f.type.startsWith("image/"))
      .slice(0, 6)
      .map((f) => ({ name: f.name, url: URL.createObjectURL(f) }));
    setFiles((prev) => [...prev, ...next].slice(0, 6));
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const reset = () => {
    setForm(empty);
    setFiles([]);
    setErrors({});
    setSent(false);
  };

  return (
    <>
      <PageHero
        num="07"
        eyebrow="Contact · Get a Quote"
        title="Start Free Quote"
        lede="Send your window details and we will take it from measurement onward. You can also call us directly or get a consultation."
        clip={clipById("frost-glass")}
      />

      <section className="border-b border-line bg-ink py-16 md:py-24 lg:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* ------------------------------ form ---------------------------- */}
            <div className="lg:col-span-7">
              <SectionHead num="01" eyebrow="Your Windows" title="Tell us what you need." />

              {sent ? (
                <Reveal>
                  <div className="mt-12 border border-gold/40 bg-char p-8 md:p-12">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
                      <IconCheck className="h-6 w-6" />
                    </span>
                    <h3 className="mt-8 text-[2rem] leading-tight">Your request is ready, {form.firstName}.</h3>
                    <p className="mt-4 max-w-lg text-[0.98rem] leading-[1.9] text-ash">
                      This is a prototype form, so nothing has left your browser yet. Open your email app with the
                      details below already written out, or call us and we will take it from there.
                    </p>

                    <dl className="mt-9 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
                      {[
                        ["Name", `${form.firstName} ${form.lastName}`],
                        ["Email", form.email],
                        ["Phone", form.phone],
                        ["Address / ZIP", form.location || "—"],
                        ["Windows needed", form.windows],
                        ["Window sizes", form.sizes || "—"],
                        ["Photos", files.length ? `${files.length} attached` : "None"],
                      ].map(([k, v]) => (
                        <div key={k} className="bg-ink p-5">
                          <dt className="label-xs text-ash-dim">{k}</dt>
                          <dd className="mt-2 break-words text-[0.95rem] text-bone">{v}</dd>
                        </div>
                      ))}
                      <div className="bg-ink p-5 sm:col-span-2">
                        <dt className="label-xs text-ash-dim">Message</dt>
                        <dd className="mt-2 text-[0.95rem] leading-relaxed text-bone">{form.message || "—"}</dd>
                      </div>
                    </dl>

                    <div className="mt-9 flex flex-wrap gap-4">
                      <Btn href={mailto} variant="solid" arrow>
                        Send by email
                      </Btn>
                      <Btn href={business.phoneHref} variant="ghost">
                        <IconPhone className="relative z-10 h-3.5 w-3.5" />
                        {business.phone}
                      </Btn>
                      <Btn onClick={reset}>Start a new request</Btn>
                    </div>
                  </div>
                </Reveal>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-12 space-y-9">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {(
                      [
                        ["firstName", "First name", "text", true],
                        ["lastName", "Last name", "text", true],
                        ["email", "Email", "email", true],
                        ["phone", "Phone", "tel", true],
                      ] as const
                    ).map(([key, label, type, required]) => (
                      <Field
                        key={key}
                        label={label}
                        required={required}
                        error={errors[key]}
                        input={
                          <input
                            id={key}
                            name={key}
                            type={type}
                            value={form[key]}
                            onChange={set(key)}
                            autoComplete={key === "email" ? "email" : key === "phone" ? "tel" : "name"}
                            placeholder={key === "email" ? "you@email.com" : key === "phone" ? "(000) 000-0000" : ""}
                            className={cn(fieldBase, errors[key] ? "border-gold/70" : "border-line focus:border-gold")}
                          />
                        }
                      />
                    ))}
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      label="Address or ZIP code"
                      input={
                        <input
                          id="location"
                          name="location"
                          type="text"
                          value={form.location}
                          onChange={set("location")}
                          autoComplete="postal-code"
                          placeholder="Town, or ZIP"
                          className={cn(fieldBase, "border-line focus:border-gold")}
                        />
                      }
                    />
                    <Field
                      label="Number of windows needed"
                      required
                      error={errors.windows}
                      input={
                        <input
                          id="windows"
                          name="windows"
                          type="number"
                          min={1}
                          inputMode="numeric"
                          value={form.windows}
                          onChange={set("windows")}
                          placeholder="e.g. 6"
                          className={cn(fieldBase, errors.windows ? "border-gold/70" : "border-line focus:border-gold")}
                        />
                      }
                    />
                  </div>

                  <Field
                    label="Window sizes (optional)"
                    hint="Width × height for each window, if you already have them."
                    input={
                      <input
                        id="sizes"
                        name="sizes"
                        type="text"
                        value={form.sizes}
                        onChange={set("sizes")}
                        placeholder="36 × 48 in, 24 × 36 in…"
                        className={cn(fieldBase, "border-line focus:border-gold")}
                      />
                    }
                  />

                  <Field
                    label="Message"
                    input={
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Tell us about the windows, the room and what you would like to fix."
                        className={cn(fieldBase, "resize-none border-line focus:border-gold")}
                      />
                    }
                  />

                  {/* photo upload */}
                  <div>
                    <span className="label-xs text-ash">Photos of your windows (optional)</span>
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragging(true);
                      }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={onDrop}
                      className={cn(
                        "mt-4 flex flex-col items-center justify-center gap-3 rounded-[4px] border border-dashed px-6 py-10 text-center transition-all duration-400",
                        dragging ? "border-gold bg-gold/8" : "border-line bg-char hover:border-gold/60",
                      )}
                    >
                      <IconUpload className={cn("h-6 w-6 transition-colors", dragging ? "text-gold" : "text-ash-dim")} />
                      <p className="text-sm text-ash">
                        Drag photos here, or{" "}
                        <button
                          type="button"
                          onClick={() => fileRef.current?.click()}
                          className="text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-soft"
                        >
                          browse your files
                        </button>
                      </p>
                      <p className="label-xs text-ash-dim">Up to 6 images · stays on your device</p>
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          addFiles(e.target.files);
                          e.target.value = "";
                        }}
                      />
                    </div>

                    {files.length > 0 && (
                      <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {files.map((f, i) => (
                          <li key={f.name + i} className="group relative overflow-hidden rounded-[4px] border border-line">
                            <img src={f.url} alt={f.name} className="aspect-[4/3] w-full object-cover" />
                            <span className="absolute inset-x-0 bottom-0 truncate bg-ink/80 px-3 py-2 text-[0.65rem] uppercase tracking-[0.14em] text-ash">
                              {f.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => setFiles((prev) => prev.filter((_, x) => x !== i))}
                              aria-label={`Remove ${f.name}`}
                              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-[3px] border border-line bg-ink/85 text-ash opacity-0 transition-all duration-300 hover:border-gold hover:text-gold group-hover:opacity-100"
                            >
                              <IconClose className="h-3 w-3" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-6 border-t border-line pt-9">
                    <Btn type="submit" variant="solid" size="lg" arrow>
                      Submit
                    </Btn>
                    <p className="text-xs leading-relaxed text-ash-dim">
                      Prefer to talk? Call{" "}
                      <a href={business.phoneHref} className="text-gold hover:text-gold-soft">
                        {business.phone}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* ---------------------------- side rail -------------------------- */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <div className="overflow-hidden rounded-[4px] border border-line">
                    <CineVideo
                      clip={clipById("hearth")}
                      className="aspect-[16/10] w-full"
                      overlay="bottom"
                    />
                  </div>
                </Reveal>

                <Reveal delay={90}>
                  <div className="mt-6 space-y-px border border-line bg-line">
                    <a href={business.phoneHref} className="group flex items-center gap-5 bg-char px-6 py-5 transition-colors hover:bg-char2">
                      <IconPhone className="h-5 w-5 text-gold" />
                      <span className="min-w-0">
                        <span className="label-xs block text-ash-dim">Phone</span>
                        <span className="mt-1.5 block font-display text-[1.35rem] font-light text-bone transition-colors group-hover:text-gold">
                          {business.phone}
                        </span>
                      </span>
                      <IconArrow className="ml-auto h-4 w-4 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                    <a href={`mailto:${business.email}`} className="group flex items-center gap-5 bg-char px-6 py-5 transition-colors hover:bg-char2">
                      <IconMail className="h-5 w-5 text-gold" />
                      <span className="min-w-0">
                        <span className="label-xs block text-ash-dim">Email</span>
                        <span className="mt-1.5 block break-all text-[0.95rem] text-bone transition-colors group-hover:text-gold">
                          {business.email}
                        </span>
                      </span>
                      <IconArrow className="ml-auto h-4 w-4 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                    <div className="flex items-start gap-5 bg-char px-6 py-5">
                      <IconPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                      <span>
                        <span className="label-xs block text-ash-dim">Address</span>
                        <span className="mt-1.5 block text-[0.95rem] leading-relaxed text-bone">
                          {business.street}
                          <br />
                          {business.city}, {business.state} {business.zip}
                        </span>
                      </span>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={140}>
                  <div className="mt-6 border border-line bg-char p-7">
                    <Eyebrow>Helpful to send</Eyebrow>
                    <ul className="mt-6 space-y-3.5">
                      {services.map((s) => (
                        <li key={s.n} className="flex items-start gap-4 text-sm text-ash">
                          <span className="num-xl mt-0.5 text-xs">{s.n}</span>
                          <span className="text-bone">{s.title}</span>
                        </li>
                      ))}
                    </ul>
                    <GoldRule className="my-7" />
                    <span className="label-xs text-ash-dim">Follow</span>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {social.map((s) => {
                        const Icon = socialIcons[s.label];
                        return (
                          <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={s.label}
                            className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-line text-ash transition-all duration-400 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------- field ------------------------------- */

function Field({
  label,
  input,
  required,
  hint,
  error,
}: {
  label: string;
  input: React.ReactNode;
  required?: boolean;
  hint?: string;
  error?: string;
}) {
  return (
    <label className="block" data-error={!!error}>
      <span className="label-xs flex items-center gap-2 text-ash">
        {label}
        {required && <span className="text-gold">Required</span>}
      </span>
      <div className="mt-3">{input}</div>
      {hint && !error && <span className="mt-2.5 block text-xs text-ash-dim">{hint}</span>}
      {error && (
        <span className="mt-2.5 block text-xs uppercase tracking-[0.14em] text-gold" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
