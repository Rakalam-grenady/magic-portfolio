import Image from "next/image";

import { Column, Meta, Schema, SmartLink, Text } from "@once-ui-system/core";

import { ContactForm } from "@/components/contact/ContactForm";
import { about, baseURL, contact, person } from "@/resources";
import styles from "./contact.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

export default function ContactPage() {
  const city = person.location.split("/")[1] ?? "Antananarivo";

  return (
    <Column className={styles.page} maxWidth="m" paddingX="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={contact.path}
        title={contact.title}
        description={contact.description}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <div className={styles.layout}>
        <aside className={styles.aside}>
          <SmartLink href="/" className={styles.logoLink}>
            <div className={styles.logoWrap}>
              <Image
                className={styles.logo}
                src="/images/logo.png"
                alt={`${person.name} — logo`}
                width={560}
                height={220}
                priority
                sizes="(max-width: 768px) 90vw, 560px"
              />
            </div>
          </SmartLink>
          <div className={styles.asideMeta}>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {person.role}
            </Text>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              Malagasy, Madagascar
            </Text>
          </div>
        </aside>

        <div className={styles.divider} aria-hidden />

        <section className={styles.main}>
          <ContactForm />
        </section>
      </div>
    </Column>
  );
}
