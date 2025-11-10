'use client';

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type CapabilityGroup = {
  icon: string;
  title: string;
  description: string;
  items: string[];
};

type UseCase = {
  id: string;
  label: string;
  title: string;
  summary: string;
  steps: string[];
};

type WorkflowStep = {
  step: string;
  detail: string;
};

export default function Home() {
  const capabilityGroups = useMemo<CapabilityGroup[]>(
    () => [
      {
        icon: "🧠",
        title: "Stratégie & idéation produit",
        description:
          "Je clarifie vos besoins, crée des wireframes et priorise un plan d’action concret.",
        items: [
          "Ateliers d’idéation assistés par IA",
          "Cartographie des fonctionnalités clés",
          "Feuilles de route pragmatiques et chiffrage rapide",
        ],
      },
      {
        icon: "💻",
        title: "Développement front & back",
        description:
          "Je construis des applications modernes et performantes prêtes à être déployées.",
        items: [
          "Sites Next.js/React optimisés SEO",
          "APIs sécurisées (Edge, Supabase, Node)",
          "Intégrations Stripe, Auth, analytics",
        ],
      },
      {
        icon: "⚙️",
        title: "Automatisation & data ops",
        description:
          "Je connecte vos outils pour automatiser la collecte et le traitement de données.",
        items: [
          "Workflows no-code/low-code (Zapier, n8n)",
          "Scripts sur mesure pour nettoyer des datasets",
          "Dashboards interactifs et alertes temps réel",
        ],
      },
    ],
    []
  );

  const useCases = useMemo<UseCase[]>(
    () => [
      {
        id: "launch",
        label: "Lancer un nouveau produit",
        title: "Prototype complet en une semaine",
        summary:
          "De l’idée au MVP : une interface claire, un back-end robuste et une livraison prête à déployer.",
        steps: [
          "Atelier express pour figer les parcours et les écrans clés.",
          "Création d’un design system léger et de composants UI réutilisables.",
          "Mise en place d’une API (Supabase/Prisma) et de l’authentification.",
          "Déploiement automatisé (Vercel) et documentation d’onboarding.",
        ],
      },
      {
        id: "optimize",
        label: "Optimiser un outil interne",
        title: "Automatisation pilotée par les données",
        summary:
          "J’analyse vos processus pour identifier ce qui peut être accéléré ou fiabilisé.",
        steps: [
          "Audit des flux existants et identification des tâches répétitives.",
          "Prototypage d’automatisations (Zapier, Make, scripts Node).",
          "Mise en production avec observabilité et alerting.",
          "Transmission du savoir-faire et handover à vos équipes.",
        ],
      },
      {
        id: "ai",
        label: "Mettre l’IA au cœur",
        title: "Expériences augmentées par l’IA",
        summary:
          "Je conçois des features intelligentes qui améliorent l’expérience utilisateur sans complexité extrême.",
        steps: [
          "Définition du use case IA (assistant, résumé, recommandation).",
          "Sélection du modèle (OpenAI, Anthropic, open-source).",
          "Mise en place des guardrails, du prompt engineering et monitoring.",
          "Itérations rapides basées sur les retours et la data.",
        ],
      },
    ],
    []
  );

  const workflow = useMemo<WorkflowStep[]>(
    () => [
      {
        step: "Diagnostic express",
        detail:
          "On définit objectifs, contraintes et critères de succès en moins de 60 minutes.",
      },
      {
        step: "Prototype guidé par la valeur",
        detail:
          "Je livre un premier incrément fonctionnel avec storytelling clair pour obtenir des retours rapides.",
      },
      {
        step: "Livraison fiable & documentée",
        detail:
          "Tests, automatisation du déploiement et guide de prise en main pour assurer la continuité.",
      },
    ],
    []
  );

  const [selectedCase, setSelectedCase] = useState<UseCase>(useCases[0]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.badge}>Assistant agentique</span>
          <h1>Je conçois, code et déploie vos idées numériques, sans friction.</h1>
          <p>
            Besoin d’un site, d’une API, d’un automatisme ou d’un prototype IA ? Je combine
            design, développement et stratégie produit pour livrer vite et bien.
          </p>
          <div className={styles.actions}>
            <a href="#competences">Explorer mes compétences</a>
            <a className={styles.secondaryAction} href="#process">
              Comprendre ma méthode
            </a>
          </div>
          <dl className={styles.metrics}>
            <div>
              <dt>48h</dt>
              <dd>pour livrer un premier prototype exploitable</dd>
            </div>
            <div>
              <dt>100%</dt>
              <dd>projets documentés et prêts à déployer</dd>
            </div>
            <div>
              <dt>+20</dt>
              <dd>cas d’usage couverts (produit, data, IA)</dd>
            </div>
          </dl>
        </section>

        <section id="competences" className={styles.capabilities}>
          <header>
            <h2>Ce que je peux réaliser pour vous</h2>
            <p>
              Du concept au déploiement, je gère la chaîne complète pour transformer vos idées
              en expériences concrètes prêtes pour la production.
            </p>
          </header>
          <div className={styles.capabilityGrid}>
            {capabilityGroups.map((group) => (
              <article key={group.title} className={styles.capabilityCard}>
                <span aria-hidden className={styles.cardIcon}>
                  {group.icon}
                </span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.useCases}>
          <header>
            <h2>Cas pratiques immédiats</h2>
            <p>
              Sélectionnez une situation pour découvrir comment j&apos;interviens et quels
              livrables vous recevez.
            </p>
          </header>
          <div className={styles.useCaseGrid}>
            <div className={styles.useCaseList} role="tablist" aria-orientation="vertical">
              {useCases.map((scenario) => {
                const isActive = selectedCase.id === scenario.id;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    className={isActive ? styles.useCaseButtonActive : styles.useCaseButton}
                    onClick={() => setSelectedCase(scenario)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    {scenario.label}
                  </button>
                );
              })}
            </div>
            <article
              className={styles.useCaseDetails}
              role="tabpanel"
              aria-live="polite"
              aria-label={selectedCase.label}
            >
              <h3>{selectedCase.title}</h3>
              <p>{selectedCase.summary}</p>
              <ul>
                {selectedCase.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="process" className={styles.process}>
          <header>
            <h2>Ma méthode en trois étapes</h2>
            <p>
              Un cadre léger mais rigoureux pour livrer rapidement sans sacrifier la qualité
              ni la maintenabilité.
            </p>
          </header>
          <ol className={styles.workflow}>
            {workflow.map((item) => (
              <li key={item.step}>
                <div className={styles.workflowMarker} aria-hidden />
                <div>
                  <h3>{item.step}</h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.cta}>
          <h2>Prêt à lancer votre prochain projet ?</h2>
          <p>
            Partagez votre idée en quelques phrases et je reviens vers vous avec un plan,
            un chiffrage et un créneau pour démarrer.
          </p>
          <a href="mailto:contact@example.com">Décrire mon besoin</a>
        </section>
      </main>
    </div>
  );
}
