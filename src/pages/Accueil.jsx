 import Navbar from "../composant/Navbar";
 import '../App.css';
 import Card from "../composant/Card";
 import Flooter from "../composant/flooter";

 function Accueil () {

    return (
    <>
        <div className="App">
            <Navbar/>
            <div className="presentation">
                <img className="egli2" src="/Texte.png" alt="" />
                <a href="#scroller"><img className="egli3" id="scoller"  src="/26859 copie.png" alt="" /></a>
            </div>

            <div className="apropos" id="scroller">
                <div className="infoeglise">
                    <h1>À PROPOS</h1>
                    <p className="achp">
                    La Compassion est une communauté chrétienne qui répand l’évangile de Jésus-Christ avec un message d’amour, de sainteté, de puissance et d’équilibre.
                    Elle compte actuellement 38 extensions (à Kinshasa et dans les provinces).Marcello Jérémie Tunasi en est le fondateur et Pasteur principal.
                    La Compassion diffuse ses cultes en direct sur internet (Facebook & YouTube)
                    </p>
                    <button className="btn" ><a href="">DECOUVRIR</a></button>

                </div>

            </div>

            <div class="Valeurs">
                <h1>NOS VALEURS</h1>
                <img src="/valeurs.png" alt="" />
            </div>


            <div className="achat">
                <div className="infoeglise">
                    <h1>ACHAT PARCELLE</h1>
                    <p class="achp">
                    Ce projet consiste à bâtir en plein cœur d'Afrique, en République Démocratique du Congo,
                    un temple pour la gloire de notre Dieu.
                    Nous voulons construire ce temple avec vous, pour offrir un grand réveil à l'humanité tout entière.
                    Nous voulons bâtir ce temple selon la vision que Dieu nous a donnée et en vous associant à son édification,
                    afin que cette bénédiction soit repartie sur l'ensemble des enfants de Dieu.
                    </p>
                    <button className="btn"><a href="">DECOUVRIR</a></button>
                </div>
            </div>

            <div className="pasteur">
               
                <div className="biographi">
                    <h3>Gedeon MULUMBA
                        Pasteur Responsable
                    </h3>
                    <p class="bios">
                        Gedeon Alain MULUMBA a donné sa vie à Jésus Christ en 1990, et a reçu l'Appel au Ministère en 1996. Il est marié à Blanche KANDOLO TUNASI. Quatre enfants sont nés de leur union : Oracle, Shukrani, Shiphra et Tabiri Wait.
                        Il est le Leader de la communauté C.R.E.F.M (Centre de Réveil, d'Evangélisation, de Formation et de Mission), Président de Marcello Tunasi Ministries (MT), Fondateur du Noyau Compassion International (NCI). Depuis 1998, il est le Pasteur principal fondateur des églises La Compassion dont le siège principal se situe à la 2ème rue Limete Industriel, numéro 6 à Kinshasa en République Démocratique du Congo.
                        Il est le compositeur de nombreux cantiques spirituels et Metteur en scène de plusieurs pièces théâtrales.
                        Il se révèle être un véritable promoteur des jeunes : prédicateurs, compositeurs et leaders politiques chrétiens et un passionné de la jeunesse estudiantine qu’il sait être le futur du monde actuel.
                    </p>
                    <button className="btnBio"><a className="bi" href="formation.html">Biographie</a></button>
                </div>

                <div className="photo">
                    <img src="/pgm.png" alt="" />
                </div>
            </div>


            <div className="imagePro">
                <h1>NOS PROGRAMMES</h1>
                <p>Les Differents Progrommes au sien de l'Eglise</p>
                <div className="pgm1">
                    <div className="vkm">
                        <img className="vvv" src="pgm.jpg" alt="" />
                        <h3 className="jour">DIMANCHE</h3>
                        <p className="prgmdim">1er Culte de 8h00 à 10h30 </p>
                        <p className="prgmdim">2ème Culte de 10h30 à 12h00
                        (diffusé en Live) 🔴</p>
                        <p className="prgmdim">3ème Culte de 12h30 à 14h30</p>
                    </div>
                    <div className="vkm">
                        <img className="vvv" src="fond1.jpg" alt="" /> 
                        <h3 className="jour">MERCREDI</h3>
                        <p className="ex1">
                        Mercredi “Soirées de Gloire” 
                        De 1630 à 19h00
                        </p>
                    </div>
                    <div className="vkm">
                        <img className="vvv" src="chorale 3.jpg.jpg" alt="" />
                        <h3 className="jour">VENDREDI</h3>
                        <p class="ex1">
                            « Intercession et Étude Biblique » 
                            De 16h30 à 19h00
                        </p>

                    </div>

                </div>

            </div>

            <div className="don">
                <div className="infoeglise3">
                <h1>FAIRE UN DON </h1>
                <p class="achp">
                    Les dons ponctuels sont une manière simple, concrète et sans engagement d’agir à nos côtés
                    en faveur des personnes les plus démunis n'ayant pas la possibilité de subvenir à leurs besoins.
                    En donnant, vous aidez une personne à trouver de la valeur dans cette société
                    et vous nous permettez de mettre en place de nouveaux projets.
                    Faire un don, c’est agir pour l’avenir.
                 </p>
                 <button class="btn"><a href="faireUnDon.html">DON</a></button>
                </div>

            </div>

        
            
            
        </div>
    </>
    )
 }
 export default Accueil; 