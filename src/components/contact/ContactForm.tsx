"use client";

import { FormEvent, useState } from "react";

import { Button, Icon, Row, Text } from "@once-ui-system/core";

import { footerContact, person } from "@/resources";
import styles from "@/app/contact/contact.module.scss";

const contactLinks = [
  { name: "WhatsApp", icon: "whatsapp" as const, href: footerContact.whatsapp },
  { name: "LinkedIn", icon: "linkedin" as const, href: footerContact.linkedin },
  { name: "GitHub", icon: "github" as const, href: footerContact.github },
  { name: "Email", icon: "email" as const, href: `mailto:${footerContact.email}` },
] as const;

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    const body = [`De : ${email}`, "", message].join("\n");
    const mailto = `mailto:${person.email}?subject=${encodeURIComponent(
      "Message depuis le portfolio",
    )}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailto;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.panel}>
      <div className={styles.intro}>
        <Text className="gradientTitle" variant="display-strong-s" as="h1">
          Contact
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Un projet, une question ? Laissez un message.
        </Text>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
       
          <input
            id="contact-email"
            name="email"
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vous@exemple.com"
            required
            autoComplete="email"
          />
        </div>

        <div className={styles.field}>
          
          <textarea
            id="contact-message"
            name="message"
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre message…"
            required
            rows={5}
          />
        </div>

        {status === "success" && (
          <Text variant="body-default-s" onBackground="neutral-weak">
            Votre client mail va s&apos;ouvrir. Sinon : {person.email}
          </Text>
        )}
        {status === "error" && (
          <Text variant="body-default-s" onBackground="neutral-weak">
            Utilisez les liens ci-dessous pour me joindre.
          </Text>
        )}

        <Row>
          <Button type="submit" variant="secondary" size="m" label="Envoyer" prefixIcon="email" />
        </Row>
      </form>

      <div className={styles.contacts}>
        <Text variant="label-default-s" onBackground="neutral-weak">
          Ou directement
        </Text>
        <nav className={styles.contactList} aria-label="Réseaux et contact">
          {contactLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={styles.contactLink}
              target={item.icon === "email" ? undefined : "_blank"}
              rel={item.icon === "email" ? undefined : "noopener noreferrer"}
              title={item.name}
            >
              <Icon name={item.icon} size="s" onBackground="neutral-weak" />
              <Text variant="label-default-s" onBackground="neutral-medium">
                {item.name}
              </Text>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
