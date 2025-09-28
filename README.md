Assistant Virtuel Éducatif - Chatbot pour Campus Connecté & Analytics

Description du Projet
Ce projet est le premier projet transversal de 2e année ESIS/CPDIA, conçu pour mobiliser les spécialités en développement logiciel, cybersécurité, data engineering, data science, gestion agile (Scrum), et IoT. L'objectif est de développer un assistant virtuel intelligent pour le campus ESIC, qui :

Réduit de 70% les questions répétitives au service scolarité.
Fournit des réponses 24h/7j pour améliorer l'expérience étudiante.
Analyse les besoins des étudiants via leurs questions.
Optimise les processus administratifs grâce aux insights data.
Modernise l'accueil avec des bornes interactives.

Les problématiques identifiées incluent la surcharge du service scolarité (200+ questions/jour), les temps de réponse lents, l'absence de données sur les préoccupations des étudiants, l'information dispersée, l'accueil physique limité, et la barrière linguistique pour les étudiants internationaux.

Objectifs business : Automatiser 80% des questions basiques, réduire le temps de traitement à 2 minutes, augmenter la satisfaction à 4.5/5, analyser les tendances de questions, et supporter 5 langues.

Personas cibles : Emma Rousseau (étudiante en Data Science, 20 ans), et d'autres comme Carlos (international), Sophie (scolarité), Jean (prospect).

Technologies choisies :
Frontend : React
Backend : Node.js
BDD : MySQL
Analytics : Power BI
Classification : BERT
Détection d'intention : Rasa
Similarité sémantique : Sentence-BERT
Traduction : Google Translate API
Speech to Text : Whisper API Open AI
Déploiement : Docker local

Le projet suit la méthodologie Scrum avec une équipe "Commit Warriors" de 7 membres, des sprints (MVP en Sprint 1), et des livrables comme un prototype, backlog, code sur GitHub, documentation, dashboard, et présentation finale.

Ce que on a Fait Jusqu'à Maintenant
Sprint 0 : Préparation

Constitué l'équipe "Commit Warriors" avec mélange de spécialités (Chef de projet data & IA, Cyber infrastructure, Data Analyst, Data Science, Ingénierie Logiciel).

Défini les rôles (PO : Celia SAIDANI, SM : Phanuel TAYOU, Dev Team : les autres).
Créé le backlog sur Trello avec user stories basées sur l'Expression de Besoin (ex. automatiser questions basiques, analytics tendances, support multilingue).
Créé le repo GitHub et ajouté un README initial.

Étape Infra/Cyber

Configuré l'environnement Mac (Python, Git, PATH).
Ajouté user stories cyber (auth, anonymisation logs RGPD, inputs sécurisés).
Créé et configuré un Dockerfile pour backend Node.js (avec Express).
Ajouté un app.js simple pour tester le serveur ("Hello World!" sur port 5000).
Résolu des erreurs Git (auth, branches divergentes, conflits).
Résolu des erreurs Docker (installation, PATH, build I/O, port occupé).
Construit l’image chatbot et testé avec docker run -p 5001:5000 chatbot (serveur actif, port mappé).

Prochains Pas

Sprint 1 : MVP fonctionnel (chatbot basique, logs, dashboard KPI).
Intégrer les autres tech (React frontend, MySQL BDD, Rasa/BERT pour IA).
Daily meetings et retrospectives Scrum.

Sprint 1 Progress :

"Logs anonymisés fonctionnels (ex. [ANONYMIZED])."
"Sécurisation des inputs testée (prévention injections et authentification fonctionnelles)."

Le projet est sur la bonne voie pour un MVP en fin de semaine ! Si tu as des questions, contacte-moi.
Installation et Lancement

Clone le repo : git clone https://github.com/AZYacine16/ChatbotCampus.git
Va dans le dossier : cd ChatbotCampus
Build Docker : docker build -t chatbot .
Lance : docker run -p 5001:5000 chatbot
Accède à http://localhost:5001 (devrait afficher "Hello World!").

Équipe:

Celia SAIDANI (ESIS-Chef de projet data & IA)
Yacine AZOUGLI (ESIS-Cyber infrastructure Critique)
Ines SID OTMANE (CPDIA-Data Analyst)
Phanuel TAYOU (ESIS-Chef de projet data & IA)
Rym Otsmane (CPDIA-Data science)
Akram EL HADHOUDI (ESIS-Chef de projet data & IA)
Mbengue Mame Arame (ESIS-Ingénierie Logiciel et Data Engineer)
