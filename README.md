<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mon Portfolio</title>

    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f8f8f8;
            color: #333;
        }

        header {
            background: #1f1f1f;
            color: white;
            padding: 60px 20px;
            text-align: center;
        }

        header h1 {
            font-size: 40px;
            margin-bottom: 10px;
        }

        header p {
            font-size: 20px;
        }

        section {
            padding: 50px 20px;
            max-width: 1000px;
            margin: auto;
        }

        h2 {
            text-align: center;
            margin-bottom: 40px;
            font-size: 30px;
        }

        /* À propos */
        .about {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            align-items: center;
            justify-content: center;
        }

        .about img {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #1f1f1f;
        }

        .about div {
            max-width: 500px;
        }

        /* Projets */
        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .project {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: transform .2s;
        }

        .project:hover {
            transform: scale(1.03);
        }

        .project h3 {
            margin-top: 0;
        }

        /* Contact */
        .contact {
            text-align: center;
        }

        footer {
            background: #1f1f1f;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }

        a {
            color: #1f1f1f;
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>

    <!-- HEADER -->
    <header>
        <h1>Ton Nom</h1>
        <p>Étudiant en BTS — Développeur / Designer / Communication</p>
    </header>

    <!-- A PROPOS -->
    <section id="about">
        <h2>À propos de moi</h2>
        <div class="about">
            <img src="https://via.placeholder.com/180" alt="Photo de profil">
            <div>
                <p>
                    Je suis étudiant en BTS et je réalise des projets dans le domaine du développement,
                    de la communication ou du design. Passionné, sérieux et motivé, je cherche à progresser
                    et à développer mes compétences.
                </p>
            </div>
        </div>
    </section>

    <!-- PROJETS -->
    <section id="projects">
        <h2>Mes Projets</h2>
        <div class="projects">

            <div class="project">
                <h3>Projet 1</h3>
                <p>Description rapide du projet.</p>
                <a href="#" target="_blank">Voir plus</a>
            </div>

            <div class="project">
                <h3>Projet 2</h3>
                <p>Description rapide du projet.</p>
                <a href="#" target="_blank">Voir plus</a>
            </div>

            <div class="project">
                <h3>Projet 3</h3>
                <p>Description rapide du projet.</p>
                <a href="#" target="_blank">Voir plus</a>
            </div>

        </div>
    </section>

    <!-- CONTACT -->
    <section id="contact">
        <h2>Me contacter</h2>
        <div class="contact">
            <p>Email : <a href="mailto:tonmail@example.com">tonmail@example.com</a></p>
            <p>LinkedIn : <a href="#" target="_blank">Ton LinkedIn</a></p>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        © 2025 — Ton Nom
    </footer>

</body>
</html>
