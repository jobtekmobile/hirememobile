import { Injectable } from '@angular/core';

@Injectable()
export class FrLanguageServices {
    private loginusername:string;
    private labelList: any = [];
    constructor(){
        this.labelList["label1"]    = "Nom d'utilisateur ou Email";
        this.labelList["label2"]    = "Mot de passe";
        this.labelList["label3"]    = "Identifiant";
        this.labelList["label4"]    = "Mot de passe oublié";
        this.labelList["label5"]    = "S'inscrire";
        this.labelList["label6"]    = "S'enregistrer en tant que...";
        this.labelList["label7"]    = "Choisissez";
        this.labelList["label8"]    = "Candidat";
        this.labelList["label9"]    = "Employeur";
        this.labelList["label10"]   = "Agence";
        this.labelList["label11"]   = "Détails personnels";
        this.labelList["label12"]   = "Prénom";
        this.labelList["label13"]   = "Nom";
        this.labelList["label14"]   = "Sexe";
        this.labelList["label15"]   = "Femme";
        this.labelList["label16"]   = "Homme";
        this.labelList["label17"]   = "Date de naissance";
        this.labelList["label18"]   = "Adresse";
        this.labelList["label19"]   = "Pays";
        this.labelList["label20"]   = "Choisissez un pays";
        this.labelList["label21"]   = "Ville";
        this.labelList["label22"]   = "Choisissez un ville";
        this.labelList["label23"]   = "Quartier";
        this.labelList["label24"]   = "Choisissez un quartier";
        this.labelList["label25"]   = "Adresse";
        this.labelList["label26"]   = "Email et contact";
        this.labelList["label27"]   = "Email";
        this.labelList["label28"]   = "Contact";
        this.labelList["label29"]   = "Document à télécharger";
        this.labelList["label30"]   = "Télécharger";
        this.labelList["label31"]   = "Nom d'utilisateur et mot de passe";
        this.labelList["label32"]   = "Nom d'utilisateur";
        this.labelList["label33"]   = "Le mot de passe doit comporter au moins 6 caractères et contenir au moins une lettre majuscule, une lettre minuscule, un chiffre, un caractère spécial, par exemple, Pass @ 123";
        this.labelList["label34"]   = "Confirmer le mot de passe";
        this.labelList["label35"]   = "Question de sécurité";
        this.labelList["label36"]   = "Réponse";
        this.labelList["label37"]   = "j'accepte les termes et conditions";
        this.labelList["label38"]   = "Suite";
        this.labelList["label39"]   = "registre";
        this.labelList["label40"]   = "Choisir un fichier";
        this.labelList["label41"]   = "Caméra";
        this.labelList["label42"]   = "Galerie";
        this.labelList["label43"]   = "Get OTP";
        this.labelList["label44"]   = "Mot de passe à usage unique";
        this.labelList["label45"]   = "Réinitialiser le mot de passe";

        this.labelList["label46"]   = "Parcourir les catégories";
        this.labelList["label47"]   = "aucun résultat trouvé";
        this.labelList["label48"]   = "Indépendant";
        this.labelList["label49"]   = "Salaire attendu";
        this.labelList["label50"]   = "âge";
        this.labelList["label51"]   = "Expérience";
        this.labelList["label52"]   = "Publié";
        this.labelList["label53"]   = "Description";
        this.labelList["label54"]   = "Détail";
        this.labelList["label55"]   = "Salaire proposé";
        this.labelList["label56"]   = "Favoris";
        this.labelList["label57"]   = "Ajouter en tant que favori?";
        this.labelList["label58"]   = "Voulez-vous enregistrer cette offre en tant que favoris?";
        this.labelList["label59"]   = "Non";
        this.labelList["label60"]   = "Oui";
        this.labelList["label61"]   = "Option de filtre pour";
        this.labelList["label62"]   = "Emploi";
        this.labelList["label63"]   = "Critères standards";
        this.labelList["label64"]   = "Pièce d'identité validée";
        this.labelList["label65"]   = "Année d'expérience";
        this.labelList["label66"]   = "Type de personnel";
        this.labelList["label67"]   = "Disponibilité";
        this.labelList["label68"]   = "Choisir une date";
        this.labelList["label69"]   = "Localisation";
        this.labelList["label70"]   = "Salaire entre";
        this.labelList["label71"]   = "Minimum";
        this.labelList["label72"]   = "Maximum";
        this.labelList["label73"]   = "Critères spécifiques";
        this.labelList["label74"]   = "Demande d'emploi";
        this.labelList["label75"]   = "Offre d'emploi";
        this.labelList["label76"]   = "Pas d'importance";
        this.labelList["label77"]   = "Supprimer";
        this.labelList["label78"]   = "Confirmez s'il vous plait!";
        this.labelList["label79"]   = "Voulez-vous supprimer?";
        this.labelList["label80"]   = "Annuler";
        this.labelList["label81"]   = "Salaire";
        this.labelList["label82"]   = "Limite d'âge";
        this.labelList["label83"]   = "Verifié";
        this.labelList["label84"]   = "Non-vérifié";
        this.labelList["label85"]   = "Numéro de téléphone";
        this.labelList["label86"]   = "Parametrer vos options de contact";
        this.labelList["label87"]   = "Changer mot de passe";
        this.labelList["label88"]   = "Mettre à jour le profil";
        this.labelList["label89"]   = "Ancien mot de passe";
        this.labelList["label90"]   = "Nouveau mot de passe";
        this.labelList["label91"]   = "Note";
        this.labelList["label92"]   = "Sauvegarder";
        this.labelList["label93"]   = "Année";
        this.labelList["label94"]   = "Tableau de bord des membres";
        this.labelList["label95"]   = "Nos membres";
        this.labelList["label96"]   = "Vérifier";
        this.labelList["label97"]   = "Vérifier agence?";
        this.labelList["label98"]   = "Voulez-vous vérifier cette agence?";
        this.labelList["label99"]   = "Vérifier candidat";
        this.labelList["label100"]  = "Vous-vous vérifier ce candidat?";
        this.labelList["label101"]  = "Vérifier employeur?";
        this.labelList["label102"]  = "Voulez-vous vérifier cet employeur?";
        this.labelList["label103"]  = "Individuel";
        this.labelList["label104"]  = "Vérifier demande d'emploi?";
        this.labelList["label105"]  = "Voulez-vous vérifier cette demande d'emploi?";
        this.labelList["label106"]  = "Vérifier offre d'emploi?";
        this.labelList["label107"]  = "Voulez-vous vérifier cette offre d'emploi?";
        this.labelList["label108"]  = "Filter";
        this.labelList["label109"]  = "Choisir un membre";
        this.labelList["label110"]  = "Tous";
        this.labelList["label111"]  = "Selectionnez un emploi";
        this.labelList["label112"]  = "Choisir un emploi";
        this.labelList["label113"]  = "Profil vérifié";
        this.labelList["label114"]  = "Gérer prénom";
        this.labelList["label115"]  = "Gérer nom de famille";
        this.labelList["label116"]  = "Gérer date de naissance";
        this.labelList["label117"]  = "Description des activités de l'entreprise";
        this.labelList["label118"]  = "Date de création";
        this.labelList["label119"]  = "Profil vérifié";
        this.labelList["label120"]  = "Arrière";
        this.labelList["label121"]  = "Mois";
        this.labelList["label122"]  = "Localisation du candidat";
        this.labelList["label123"]  = "Quel salaire attendez-vous?";
        this.labelList["label124"]  = "Mensuel";
        this.labelList["label125"]  = "Horaire";
        this.labelList["label126"]  = "Prix au service";
        this.labelList["label127"]  = "Savez-vous lire?";
        this.labelList["label128"]  = "Savez-vous écrire?";
        this.labelList["label129"]  = "Dormir sur place";
        this.labelList["label130"]  = "Compétence";
        this.labelList["label131"]  = "Description additionnelle";
        this.labelList["label132"]  = "Commentaire";
        this.labelList["label133"]  = "Soumettre";
        this.labelList["label134"]  = "Quel sexe recherchez-vous?";
        this.labelList["label135"]  = "Quel type de personnel recherchez-vous?";
        this.labelList["label136"]  = "Quelle tranche d'âge recherchez-vous?";
        this.labelList["label137"]  = "Quel nombre d'année d'expérience attendez-vous?";
        this.labelList["label138"]  = "Quel salaire proposez-vous au candidat?";
        this.labelList["label139"]  = "Le candidat doit-il savoir lire?";
        this.labelList["label140"]  = "Le candidat doit-il savoir écrire?";
        this.labelList["label141"]  = "Le candidat doit-il savoir écrire?";
        this.labelList["label142"]  = "Quand le service devrait commencer?";
        this.labelList["label143"]  = "Combien de personne vivent chez-vous?";
        this.labelList["label144"]  = "Nombre d'adultes";
        this.labelList["label145"]  = "Nombre d'enfants";
        this.labelList["label146"]  = "Années";
        this.labelList["label147"]  = "Mois";
        this.labelList["label148"]  = "Aptitude à lire";
        this.labelList["label149"]  = "Aptitude à écrire";
        this.labelList["label150"]  = "Nombre de personne";
        this.labelList["label151"]  = "Salaire attendu";
        this.labelList["label152"]  = "Compétence du candidat";
        this.labelList["label153"]  = "Lire";
        this.labelList["label154"]  = "Écrire";
        this.labelList["label155"]  = "Titre de l'emploi";
        this.labelList["label156"]  = "Choisir candidats";

        this.labelList["validmsg1"]   = "Choisir le type d'enregistrement";
        this.labelList["validmsg2"]   = "Choisir le sexe";
        this.labelList["validmsg3"]   = "Prénom requis";
        this.labelList["validmsg4"]   = "Nom de famille requis";
        this.labelList["validmsg5"]   = "Date de naissance requise";
        this.labelList["validmsg6"]   = "Choisir Pays";
        this.labelList["validmsg7"]   = "Choisir Ville";
        this.labelList["validmsg8"]   = "Choisir Quartier";
        this.labelList["validmsg9"]   = "Adresse requise";
        this.labelList["validmsg10"]  = "Email requis";
        this.labelList["validmsg11"]  = "Code postal requis";
        this.labelList["validmsg12"]  = "Numéro de téléphone requis";
        this.labelList["validmsg13"]  = "Nom d'utilisateur requis";
        this.labelList["validmsg14"]  = "Mot de passe requis";
        this.labelList["validmsg15"]  = "Confirmation du mot de passe requis";
        this.labelList["validmsg16"]  = "Confirmation du mot de passe ne correspond pas";
        this.labelList["validmsg17"]  = "Choisir question de sécurité";
        this.labelList["validmsg18"]  = "Réponse à la question de sécurité requise";

        this.labelList["validmsg19"]  = "Salaire minimum est requis";
        this.labelList["validmsg20"]  = "Salaire maximum est requis";
        this.labelList["validmsg21"]  = "Choisir expérience";
        this.labelList["validmsg22"]  = "Année d'expérience est requis";
        this.labelList["validmsg23"]  = "Âge minimum est requis";
        this.labelList["validmsg24"]  = "Âge maximum est requis";
        this.labelList["validmsg25"]  = "Titre de l'emploi est requis";

        this.labelList["errormsg1"]   = "Echec de connexion. Veuillez Réessayer";
        this.labelList["errormsg2"]   = "Échec de l'enregistrement. Veuillez réessayer";
        this.labelList["errormsg3"]   = "Impossible de retrouver les pays. Veuillez réessayer";
        this.labelList["errormsg4"]   = "Impossible de retrouver les villes. Veuillez réessayer";
        this.labelList["errormsg5"]   = "Impossible de retrouver les quartiers. Veuillez réessayer";
        this.labelList["errormsg6"]   = "Désolé!Vous ne pouvez télécharger que des fichiers .png, .jpg, .jpeg";
        this.labelList["errormsg7"]   = "Question de sécurité échouée. Veuillez réessayer ";
        this.labelList["errormsg8"]   = "Réinitialisation du mot de passe échouée.Veuillez réessayer";

        this.labelList["errormsg9"]   = "Mot de passe et confirmation de mot de passe ne correspondent pas";
        this.labelList["errormsg10"]  = "Echec dans la recherche des catégories.Veuillez réessayer";
        this.labelList["errormsg11"]  = "Aucune catégorie trouvée";
        this.labelList["errormsg12"]  = "Aucun emploi trouvé";
        this.labelList["errormsg13"]  = "Echec dans la recherche d'emploi. Veuillez réessayer";
        this.labelList["errormsg14"]  = "Echec de l'ajout de favoris.Veuillez réessayer ";
        this.labelList["errormsg15"]  = "Quelque chose s'est mal passé. Veuillez réessayer";
        this.labelList["errormsg16"]  = "Echec dans la recherche des tâches de l'emploi";
        this.labelList["errormsg17"]  = "Aucun résultat trouvé";
        this.labelList["errormsg18"]  = "Echec de supression.Veuillez réessayer";
        this.labelList["errormsg19"]  = "Echec dans la recherche des offres d'emploi favorites";
        this.labelList["errormsg20"]  = "Aucune notification trouvée";
        this.labelList["errormsg21"]  = "Echec dans la recherche des détails de notification.Veuillez réessayer";
        this.labelList["errormsg22"]  = "Echec dans la recherche des détails du profil. Veuillez réessayer";
        this.labelList["errormsg23"]  = "Echec de la mise à jour des détails. Veuillez réessayer";
        this.labelList["errormsg24"]  = "Téléchargement de la photo de profil échoué. Veuillez réessayer";
        this.labelList["errormsg25"]  = "Téléchargement de la photo de pièce d'identité échouée. Veuillez réessayer";
        this.labelList["errormsg26"]  = "Activation du compte agence échouée. Veuillez réessayer";
        this.labelList["errormsg27"]  = "Vérification du candidat échouée.Veuillez réessayer";
        this.labelList["errormsg28"]  = "Vérification de l'employeur échouée.Veuillez réessayer";
        this.labelList["errormsg29"]  = "Vérification de la demande d'emploi échouée.Veuillez réessayer";
        this.labelList["errormsg30"]  = "Vérification de l'offre d'emploi échouée.Veuillez réessayer";
        this.labelList["errormsg31"]  = "Echec de la recherche des membres.Veuillez réessayer";
        this.labelList["errormsg32"]  = "Echec de la création. Veuillez réessayer";
        this.labelList["errormsg33"]  = "Echec dans la recherche des détails de l'offre d'emploi.Veuillez réessayer";
        this.labelList["errormsg34"]  = "Echec dans la recherche des détails de la demande d'emploi.Veuillez réessayer";
        
        this.labelList["successmsg1"]   = "Enregistré avec succès";
        
        this.labelList["successmsg2"]   = "Cette offre est bien enregistrée en tant que favori";
        this.labelList["successmsg3"]   = "Vous avez bien supprimé";
        this.labelList["successmsg4"]   = "Suppression réussite";

        this.labelList["pagetitle1"]  ="Tableau de bord";
        this.labelList["pagetitle2"]  ="Recherche offre/demande";
        this.labelList["pagetitle3"]  ="Mes demandes d'emploi";
        this.labelList["pagetitle4"]  ="Mes offres d'emploi favorites";
        this.labelList["pagetitle5"]  ="Notifications";
        this.labelList["pagetitle6"]  ="Mon profil";
        this.labelList["pagetitle7"]  ="Changer mot de passe";
        this.labelList["pagetitle8"]  ="Mes offres d'emploi";
        this.labelList["pagetitle9"]  ="Mes favoris";
        this.labelList["pagetitle10"] ="Tableau de bord";
        this.labelList["pagetitle11"] ="Vérification des agences";
        this.labelList["pagetitle12"] ="Vérification des candidats";
        this.labelList["pagetitle13"] ="Vérification des employeurs";
        this.labelList["pagetitle14"] ="Vérification des demandes d'emploi";
        this.labelList["pagetitle15"] ="Vérification des offres d'emploi";
        this.labelList["pagetitle16"] ="Export";
        this.labelList["pagetitle17"] ="Détail de l'agence";
        this.labelList["pagetitle18"] ="Inscrire candidat";
        this.labelList["pagetitle19"] ="Formulaire de demande d'emploi";
        this.labelList["pagetitle20"] ="Formulaire d'offre d'emploi";
        this.labelList["pagetitle21"] ="Formulaire profil de l'emploi";

        this.labelList["menu1"]  ="Tableau de bord";
        this.labelList["menu2"]  ="Recherche offre/demande";
        this.labelList["menu3"]  ="Mes demandes d'emploi";
        this.labelList["menu4"]  ="Gérer mes favoris";
        this.labelList["menu5"]  ="Messages et notifications";
        this.labelList["menu6"]  ="Gérer mes réglages";
        this.labelList["menu7"]  ="Mes offres d'emploi";
        this.labelList["menu8"]  ="Inscrire candidat";
        this.labelList["menu9"]  ="Vérifier candidat";
        this.labelList["menu10"] ="Vérifier agence";
        this.labelList["menu11"] ="Verifier employeur";
        this.labelList["menu12"] ="Vérifier demande d'emploi";
        this.labelList["menu13"] ="Vérifier offre d'emploi";
        this.labelList["menu14"] ="Export";
        this.labelList["menu15"] ="Déconnexion";

    }
    getLabelLists() {
        return this.labelList;
      }
}