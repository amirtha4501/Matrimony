import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  detail = {};
  regForm: FormGroup;
  profiles:any;
  storeImg: string;
  storeImg1: string;
  storeImg2: string;
  submitted = false;
  registered = false;

  public imagePath;
  imgURL: any;
  imgURL1: any;
  imgURL2: any;
  public message: string;
  selectedItems: any = null;
  
  stars = [
    "Ashwini - 1",
    "Ashwini - 2",
    "Ashwini - 3",
    "Ashwini - 4",
    "Barani - 1",
    "Barani - 2",
    "Barani - 3",
    "Barani - 4",
    "Karthigai - 1",
    "Karthigai - 2",
    "Karthigai - 3",
    "Karthigai - 4",
    "Rohini - 1",
    "Rohini - 2",
    "Rohini - 3",
    "Rohini - 4",
    "Mirugasiridam - 1",
    "Mirugasiridam - 2",
    "Mirugasiridam - 3",
    "Mirugasiridam - 4",
    "Thiruvathirai - 1",
    "Thiruvathirai - 2",
    "Thiruvathirai - 3",
    "Thiruvathirai - 4",
    "Punarposam - 1",
    "Punarposam - 2",
    "Punarposam - 3",
    "Punarposam - 4",
    "Posam - 1",
    "Posam - 2",
    "Posam - 3",
    "Posam - 4",
    "Ailyam - 1",
    "Ailyam - 2",
    "Ailyam - 3",
    "Ailyam - 4",
    "Magam - 1",
    "Magam - 2",
    "Magam - 3",
    "Magam - 4",
    "Puram - 1",
    "Puram - 2",
    "Puram - 3",
    "Puram - 4",
    "Uthiram - 1",
    "Uthiram - 2",
    "Uthiram - 3",
    "Uthiram - 4",
    "Hastham - 1",
    "Hastham - 2",
    "Hastham - 3",
    "Hastham - 4",
    "Chithirai - 1",
    "Chithirai - 2",
    "Chithirai - 3",
    "Chithirai - 4",
    "Suvathi - 1",
    "Suvathi - 2",
    "Suvathi - 3",
    "Suvathi - 4",
    "Visagam - 1",
    "Visagam - 2",
    "Visagam - 3",
    "Visagam - 4",
    "Anusam - 1",
    "Anusam - 2",
    "Anusam - 3",
    "Anusam - 4",
    "Kettai - 1",
    "Kettai - 2",
    "Kettai - 3",
    "Kettai - 4",
    "Mulam - 1",
    "Mulam - 2",
    "Mulam - 3",
    "Mulam - 4",
    "Puradam - 1",
    "Puradam - 2",
    "Puradam - 3",
    "Puradam - 4",
    "Uthiradam - 1",
    "Uthiradam - 2",
    "Uthiradam - 3",
    "Uthiradam - 4",
    "Thiruvonam - 1",
    "Thiruvonam - 2",
    "Thiruvonam - 3",
    "Thiruvonam - 4",
    "Avitam - 1",
    "Avitam - 2",
    "Avitam - 3",
    "Avitam - 4",
    "Sathayam - 1",
    "Sathayam - 2",
    "Sathayam - 3",
    "Sathayam - 4",
    "Puratathi - 1",
    "Puratathi - 2",
    "Puratathi - 3",
    "Puratathi - 4",
    "Uthiratathi - 1",
    "Uthiratathi - 2",
    "Uthiratathi - 3",
    "Uthiratathi - 4",
    "Revathi - 1",
    "Revathi - 2",
    "Revathi - 3",
    "Revathi - 4"
  ]
  castes = [
    "Brahmin",
    "Chettiyar",
    "Desikar",
    "Devar/thevar",
    "Dhanak",
    "Gandla",
    "Ganiga",
    "Gramani",
    "Gounder",
    "Isai vellalar",
    "Julaha",
    "Kanakkan padanna",
    "Kandara",
    "Karukathar",
    "Khatik",
    "Kerala mudali",
    "Kasukara",
    "Karunneegar",
    "Mannan/velan/vannan",
    "Maruthuvar",
    "Meenavar",
    "Meghwal",
    "Mudaliyar",
    "Muthuraja",
    "Nadar",
    "Naicker",
    "Naidu",
    "Pannan",
    "Parkavakulam/udayar",
    "Poundra",
    "Pattusali",
    "Parvatha rajakulam",
    "Paswan/dusadh",
    "Pillai",
    "Pulaya/cheruman",
    "Reddy",
    "Rohit/ chamar",
    "Sc",
    "St",
    "Saliyar",
    "Samagar",
    "Sambava",
    "Satnami",
    "Senguntha mudaliyar",
    "Sonakar",
    "Senai thalaivar",
    "Telgupatti",
    "Thandan",
    "Vadambar",
    "Veera saivam",
    "Vanniakula kshatriyar/padaiyachi",
    "Valluvan",
    "Vaduvan",
    "Vellalar",
    "Vishwakarma",
    "Yadavar",
    "Yadava naidu",
    "Vokkaliga",
    "Vellan chettiar",
  ]
  hindu_castes = [
    "24 Manai Telugu Chettiar",
    "96 Kuli Maratha",
    "Aaru Nattu Vellala",
    "Achirapakkam Chettiar",
    "Ad Dharmi",
    "Adi Andhra",
    "Adi Dravidar",
    "Adi Karnataka",
    "Agamudayar / Arcot / Thuluva Vellala",
    "Agaram Vellan Chettiar",
    "Agarwal",
    "Agnikula Kshatriya",
    "Agrahari",
    "Agri",
    "Aguri / Ugra Kshatriya",
    "Aheriya",
    "Ahir Shimpi",
    "Ahirwar",
    "Ahom",
    "Ambalavasi",
    "Amma Kodava",
    "Anjana (Chowdary) Patel",
    "Arakh / Arakvanshiya",
    "Aramari / Gabit",
    "Arekatica",
    "Arora",
    "Arunthathiyar",
    "Arya Vysya",
    "Asathi",
    "Ayira Vysya",
    "Ayodhyavasi",
    "Ayyaraka",
    "Badaga",
    "Bagdi",
    "Baidya",
    "Bairwa",
    "Baishnab",
    "Baishya",
    "Bajantri",
    "Balai",
    "Balija",
    "Balija Naidu",
    "Balija Reddy",
    "Banayat Oriya",
    "Banik",
    "Baniya",
    "Baniya - Bania",
    "Baniya - Kumuti",
    "Banjara",
    "Barai",
    "Bari",
    "Baria",
    "Barnwal",
    "Barujibi",
    "Beri Chettiar",
    "Besta",
    "Bhandari",
    "Bhatia",
    "Bhatraju",
    "Bhavasar Kshatriya",
    "Bhil",
    "Bhoi",
    "Bhovi",
    "Bhoyar",
    "Bhulia / Meher",
    "Billava",
    "Bishnoi/Vishnoi",
    "Bondili",
    "Boyar",
    "Brahmakshtriya",
    "Brahmbatt",
    "Brahmin - Anavil",
    "Brahmin - Anaviln Desai",
    "Brahmin - Audichya",
    "Brahmin - Baidhiki/Vaidhiki",
    "Brahmin - Bardai",
    "Brahmin - Barendra",
    "Brahmin - Bhargav",
    "Brahmin - Bhatt",
    "Brahmin - Bhumihar",
    "Brahmin - Dadhich",
    "Brahmin - Daivadnya",
    "Brahmin - Danua",
    "Brahmin - Deshastha",
    "Brahmin - Dhiman",
    "Brahmin - Dravida",
    "Brahmin - Embrandiri",
    "Brahmin - Garhwali",
    "Brahmin - Gaur",
    "Brahmin - Goswami/Gosavi",
    "Brahmin - Gujar Gaur",
    "Brahmin - Gurukkal",
    "Brahmin - Halua",
    "Brahmin - Havyaka",
    "Brahmin - Hoysala",
    "Brahmin - Iyengar",
    "Brahmin - Iyer",
    "Brahmin - Jangid",
    "Brahmin - Jhadua",
    "Brahmin - Jyotish",
    "Brahmin - Kanyakubj",
    "Brahmin - Karhade",
    "Brahmin - Khadayata",
    "Brahmin - Khandelwal",
    "Brahmin - Khedaval",
    "Brahmin - Kokanastha",
    "Brahmin - Kota",
    "Brahmin - Koteshwara / Kota (Madhwa )",
    "Brahmin - Kulin",
    "Brahmin - Kumaoni",
    "Brahmin - Madhwa",
    "Brahmin - Maithil",
    "Brahmin - Mevada",
    "Brahmin - Modh",
    "Brahmin - Mohyal",
    "Brahmin - Nagar",
    "Brahmin - Namboodiri",
    "Brahmin - Narmadiya",
    "Brahmin - Niyogi",
    "Brahmin - Others",
    "Brahmin - Paliwal",
    "Brahmin - Panda",
    "Brahmin - Pandit",
    "Brahmin - Panicker",
    "Brahmin - Pareek",
    "Brahmin - Pushkarna",
    "Brahmin - Rajgor",
    "Brahmin - Rarhi",
    "Brahmin - Rarhi/Radhi",
    "Brahmin - Rigvedi",
    "Brahmin - Rudraj",
    "Brahmin - Sakaldwipi",
    "Brahmin - Sanadya",
    "Brahmin - Sanketi",
    "Brahmin - Saraswat",
    "Brahmin - Sarua",
    "Brahmin - Saryuparin",
    "Brahmin - Shivalli (Madhva)",
    "Brahmin - Shivhalli",
    "Brahmin - Shri Gaud",
    "Brahmin - Shri Mali",
    "Brahmin - Shrimali",
    "Brahmin - Shukla Yajurvedi",
    "Brahmin - Sikhwal",
    "Brahmin - Smartha",
    "Brahmin - Sri Vaishnava",
    "Brahmin - Stanika",
    "Brahmin - Tapodhan",
    "Brahmin - Tyagi",
    "Brahmin - Vaidiki",
    "Brahmin - Vaikhanasa",
    "Brahmin - Valam",
    "Brahmin - Velanadu",
    "Brahmin - Vyas",
    "Brahmin - Zalora",
    "Brajastha Maithil",
    "Brajastha Maithil",
    "Bunt (Shetty)",
    "CKP",
    "Chakkala Nair",
    "Chalawadi and Holeya",
    "Chambhar",
    "Chandravanshi Kahar",
    "Charan",
    "Chasa",
    "Chattada Sri Vaishnava",
    "Chaturth",
    "Chaudary",
    "Chaurasia",
    "Chennadasar",
    "Cherakula Vellalar",
    "Chettiar",
    "Chhetri",
    "Chippolu (Mera)",
    "Choudhary",
    "Coorgi",
    "Dasapalanjika / Kannada Saineegar",
    "Deshmukh",
    "Desikar",
    "Desikar Thanjavur",
    "Devadiga",
    "Devandra Kula Vellalar",
    "Devang Koshthi",
    "Devanga",
    "Devanga Chettiar",
    "Devar/Thevar/Mukkulathor",
    "Devrukhe Brahmin",
    "Dhanak",
    "Dhangar",
    "Dheevara",
    "Dhiman",
    "Dhoba",
    "Dhobi",
    "Dhor / Kakkayya",
    "Dommala",
    "Dosar / Dusra",
    "Dumal",
    "Dusadh (Paswan)",
    "Ediga",
    "Ediga /Goud (Balija)",
    "Elur Chetty",
    "Ezhava",
    "Ezhava Panicker",
    "Ezhava Thandan",
    "Ezhuthachan",
    "Gabit",
    "Gahoi",
    "Gajula / Kavarai",
    "Ganda",
    "Gandha Vanika",
    "Gandla",
    "Gandla / Ganiga",
    "Ganiga",
    "Garhwali",
    "Gatti",
    "Gavandi",
    "Gavara",
    "Gawali",
    "Ghisadi",
    "Ghumar",
    "Goala",
    "Goan",
    "Gomantak",
    "Gond",
    "Gondhali",
    "Gopal / Gopala",
    "Goud",
    "Gounder",
    "Gounder - Kongu Vellala Gounder",
    "Gounder - Nattu Gounder",
    "Gounder - Others",
    "Gounder - Urali Gounder",
    "Gounder - Vanniya Kula Kshatriyar",
    "Gounder - Vettuva Gounder",
    "Gowda",
    "Gowda - Kuruba Gowda",
    "Gramani",
    "Gudia",
    "Gujjar",
    "Gulahre",
    "Gupta",
    "Guptan",
    "Gurav",
    "Gurjar",
    "Haihaivanshi",
    "Halba Koshti",
    "Heggade",
    "Helava",
    "Holar",
    "Hugar (Jeer)",
    "Illaththu Pillai",
    "Intercaste",
    "Irani",
    "Isai Vellalar",
    "Jaalari",
    "Jaiswal",
    "Jandra",
    "Jangam",
    "Jangra - Brahmin",
    "Jat",
    "Jatav",
    "Jetty/Malla",
    "Jhadav",
    "Jijhotia Brahmin",
    "Jogi (Nath)",
    "Julaha",
    "Kachara",
    "Kadava Patel",
    "Kadia",
    "Kahar",
    "Kaibarta",
    "Kaikaala",
    "Kalal",
    "Kalanji",
    "Kalar",
    "Kalinga",
    "Kalinga Vysya",
    "Kalita",
    "Kalwar",
    "Kamboj",
    "Kamma",
    "Kamma Naidu",
    "Kanakkan Padanna",
    "Kandara",
    "Kansari",
    "Kansyakaar",
    "Kanykubj Bania",
    "Kapu",
    "Kapu Naidu",
    "Kapu Reddy",
    "Karakala Bhakthula",
    "Karana",
    "Karkathar",
    "Karmakar",
    "Karni Bhakthula",
    "Karuneegar",
    "Kasar",
    "Kasaundhan",
    "Kashyap",
    "Kasukara",
    "Katiya",
    "Kavara",
    "Kavuthiyya/Ezhavathy",
    "Kayastha",
    "Kayastha (Bengali)",
    "Kerala Mudali",
    "Keshri (Kesarwani)",
    "Khandayat",
    "Khandelwal",
    "Kharwa",
    "Kharwar",
    "Khatik",
    "Khatri",
    "Kirar",
    "Kodava",
    "Kodikal Pillai",
    "Kokanastha Maratha",
    "Koli",
    "Koli Mahadev",
    "Koli Patel",
    "Komti /Arya Vaishya",
    "Kongu Chettiar",
    "Kongu Nadar",
    "Kongu Vellala Gounder",
    "Konkani",
    "Korama",
    "Kori",
    "Kori/Koli",
    "Kosthi",
    "Krishnavaka",
    "Kshatriya",
    "Kshatriya Kurmi",
    "Kshatriya Raju",
    "Kudumbi",
    "Kulal",
    "Kulalar",
    "Kulita",
    "Kumaoni Rajput",
    "Kumawat",
    "Kumbhakar",
    "Kumbhar",
    "Kumhar",
    "Kummari",
    "Kunbi",
    "Kunbi Lonari",
    "Kunbi Maratha",
    "Kunbi Tirale",
    "Kuravan",
    "Kurmi",
    "Kurmi/Kurmi Kshatriya",
    "Kurni",
    "Kuruba",
    "Kuruhina Shetty",
    "Kuruhini Chetty",
    "Kurumbar",
    "Kuruva",
    "Kushwaha (Koiri)",
    "Kutchi",
    "Lad",
    "Lambadi",
    "Laxminarayan gola",
    "Leva patel",
    "Leva patil",
    "Linga Balija",
    "Lingayath",
    "Lodhi Rajput",
    "Lohana",
    "Lohar",
    "Loniya",
    "Lubana",
    "Madhesiya/Kanu/Halwai",
    "Madiga",
    "Mahajan",
    "Mahar",
    "Mahendra",
    "Maheshwari",
    "Maheshwari / Meshri",
    "Mahishya",
    "Mahor",
    "Mahuri",
    "Mair Rajput Swarnkar",
    "Majabi",
    "Mala",
    "Mali",
    "Mallah",
    "Malviya Brahmin",
    "Malwani",
    "Mangalorean",
    "Manipuri",
    "Manjapudur Chettiar",
    "Mannadiyar",
    "Mannan / Velan / Vannan",
    "Mapila",
    "Maratha",
    "Maratha Kshatriya",
    "Maruthuvar",
    "Matang",
    "Mathur",
    "Mathur Vaishya",
    "Matia Patel",
    "Maurya / Shakya",
    "Meena",
    "Meenavar",
    "Meghwal",
    "Mehra",
    "Meru Darji",
    "Mochi",
    "Modak",
    "Modh Ghanchi",
    "Modi",
    "Modikarlu",
    "Mogaveera",
    "Mudaliyar",
    "Mudiraj",
    "Munnuru Kapu",
    "Musukama",
    "Muthuraja",
    "Naagavamsam",
    "Nabit",
    "Nadar",
    "Nagaralu",
    "Nai / Nayi Brahmin",
    "Naicker",
    "Naicker - Others",
    "Naicker - Vanniya Kula Kshatriyar",
    "Naidu",
    "Naik",
    "Nair",
    "Namasudra / Namassej",
    "Nambiar",
    "Namdarlu",
    "Nanjil Mudali",
    "Nanjil Nattu Vellalar",
    "Nanjil Vellalar",
    "Nanjil pillai",
    "Nankudi Vellalar",
    "Napit",
    "Nattu Gounder",
    "Nattukottai Chettiar",
    "Nayaka",
    "Neeli",
    "Neeli Saali",
    "Nema",
    "Nepali",
    "Nessi",
    "Nhavi",
    "Niari",
    "Odan",
    "Ontari",
    "Oraon",
    "Oswal",
    "Otari",
    "Othuvaar",
    "Padmasali",
    "Padmashali",
    "Padmavati Porwal",
    "Pagadala",
    "Pal",
    "Pallan / Devandra Kula Vellalan",
    "Panan",
    "Panchal",
    "Pandaram",
    "Pandiya Vellalar",
    "Panicker",
    "Pannirandam Chettiar",
    "Paravan / Bharatar",
    "Parit",
    "Parkavakulam / Udayar",
    "Parsi",
    "Partraj",
    "Parvatha Rajakulam",
    "Pasi",
    "Paswan / Dusadh",
    "Patel",
    "Pathare Prabhu",
    "Patil",
    "Patnaick/Sistakaranam",
    "Patra",
    "Pattinavar",
    "Pattusali",
    "Patwa",
    "Perika",
    "Perika/Puragiri Kshatriya",
    "Pillai",
    "Poddar",
    "Poosala",
    "Porwal",
    "Porwal / Porwar",
    "Poundra",
    "Prajapati",
    "Pulaya / Cheruman",
    "Radhi / Niari",
    "Raigar",
    "Rajaka / Vannar",
    "Rajastani",
    "Rajbhar",
    "Rajbonshi",
    "Rajpurohit",
    "Rajput",
    "Raju / Kshatriya Raju",
    "Ramanandi",
    "Ramdasia",
    "Ramgariah",
    "Ramoshi",
    "Rastogi",
    "Rathi",
    "Rauniar",
    "Ravidasia",
    "Rawat",
    "Reddy",
    "Relli",
    "Rohit / Chamar",
    "Ror",
    "SC",
    "SKP",
    "ST",
    "Sadgope",
    "Sadhu Chetty",
    "Sagara (Uppara)",
    "Saha",
    "Sahu",
    "Saini",
    "Saiva Pillai Thanjavur",
    "Saiva Pillai Tirunelveli",
    "Saiva Vellan chettiar",
    "Saliya",
    "Saliyar",
    "Samagar",
    "Sambava",
    "Sathwara",
    "Satnami",
    "Savji",
    "Senai Thalaivar",
    "Senguntha Mudaliyar",
    "Sengunthar/Kaikolar",
    "Settibalija",
    "Setty Balija",
    "Shah",
    "Shaw / Sahu/Teli",
    "Shettigar",
    "Shilpkar",
    "Shimpi/Namdev",
    "Sindhi",
    "Sindhi-Amil",
    "Sindhi-Baibhand",
    "Sindhi-Bhanusali",
    "Sindhi-Bhatia",
    "Sindhi-Chhapru",
    "Sindhi-Dadu",
    "Sindhi-Hyderabadi",
    "Sindhi-Larai",
    "Sindhi-Larkana",
    "Sindhi-Lohana",
    "Sindhi-Rohiri",
    "Sindhi-Sahiti",
    "Sindhi-Sakkhar",
    "Sindhi-Sehwani",
    "Sindhi-Shikarpuri",
    "Sindhi-Thatai",
    "Sonar",
    "Soni",
    "Sonkar",
    "Sourashtra",
    "Sozhia Chetty",
    "Sozhiya Vellalar",
    "Srisayana",
    "Sugali (Naika)",
    "Sunari",
    "Sundhi",
    "Surya Balija",
    "Suthar",
    "Swakula Sali",
    "Swarnakar",
    "Tamboli",
    "Tammali",
    "Tanti",
    "Tantubai",
    "Telaga",
    "Teli",
    "Telugupatti",
    "Thakkar",
    "Thakore",
    "Thakur",
    "Thandan",
    "Tharakan",
    "Thigala",
    "Thiyya",
    "Thiyya Thandan",
    "Thogata Veera Kshatriya",
    "Thogata Veerakshathriya",
    "Thondai Mandala Vellalar",
    "Thota",
    "Tili",
    "Togata",
    "Tonk Kshatriya",
    "Turupu Kapu",
    "Ummar / Umre / Bagaria",
    "Urali Gounder",
    "Urs",
    "Vada Balija",
    "Vadambar",
    "Vadar",
    "Vaddera",
    "Vadugan",
    "Vaish",
    "Vaishnav",
    "Vaishnav Dishaval",
    "Vaishnav Kapol",
    "Vaishnav Khadyata",
    "Vaishnav Lad",
    "Vaishnav Modh",
    "Vaishnav Porvad",
    "Vaishnav Shrimali",
    "Vaishnav Sorathaiya",
    "Vaishnav Vania",
    "Vaishnava",
    "Vaishya",
    "Vaishya Vani",
    "Valar",
    "Valluvan",
    "Valmiki",
    "Valsad",
    "Vani",
    "Vani / Vaishya",
    "Vania",
    "Vanika Vyshya",
    "Vaniya",
    "Vaniya Chettiar",
    "Vanjara",
    "Vanjari",
    "Vankar",
    "Vannar",
    "Vannia Kula Kshatriyar",
    "Vanyakulakshatriya",
    "Variar",
    "Varshney",
    "Varshney (Barahseni)",
    "Veera Saivam",
    "Veerakodi Vellala",
    "Velaan",
    "Velama",
    "Vellala Pillai",
    "Vellalar3",
    "Vellan Chettiars",
    "Veluthedathu Nair",
    "Vettuva Gounder",
    "Vettuvan",
    "Vijayvargia",
    "Vilakithala Nair",
    "Vilakkithala Nair",
    "Vishwakarma",
    "Viswabrahmin",
    "Vokkaliga",
    "Vysya",
    "Yadav",
    "Yadava Naidu",
    "Yellapu",
    "Other Caste",
    "Don't wish to specify",
    "Anavil Brahmin",
    "Audichya Brahmin",
    "Barendra Brahmin ",
    "Bhatt Brahmin",
    "Bhumihar Brahmin",
    "Daivadnya Brahmin",
    "Danua Brahmin",
    "Deshastha Brahmin",
    "Dhiman Brahmin",
    "Dravida Brahmin",
    "Embrandiri Brahmin",
    "Garhwali Brahmin",
    "Gaur Brahmin",
    "Goswami/Gosavi Brahmin",
    "Gujar Gaur Brahmin",
    "Gurukkal Brahmin",
    "Halua Brahmin",
    "Havyaka Brahmin",
    "Hoysala Brahmin",
    "Iyengar Brahmin",
    "Iyer Brahmin",
    "Jangid Brahmin",
    "Jhadua Brahmin",
    "Kanyakubj Brahmin",
    "Karhade Brahmin",
    "Kokanastha Brahmin",
    "Kota Brahmin",
    "Kulin Brahmin",
    "Kumaoni Brahmin",
    "Madhwa Brahmin",
    "Maithil Brahmin",
    "Modh Brahmin",
    "Mohyal Brahmin",
    "Nagar Brahmin",
    "Namboodiri Brahmin",
    "Narmadiya Brahmin",
    "Niyogi Brahmin",
    "Panda Brahmin",
    "Pandit Brahmin",
    "Pushkarna Brahmin",
    "Rarhi Brahmin",
    "Rigvedi Brahmin",
    "Rudraj Brahmin",
    "Sakaldwipi Brahmin",
    "Sanadya Brahmin",
    "Sanketi Brahmin",
    "Saraswat Brahmin",
    "Saryuparin Brahmin",
    "Shivhalli Brahmin",
    "Shrimali Brahmin",
    "Sikhwal Brahmin",
    "Smartha Brahmin",
    "Sri Vaishnava Brahmin",
    "Stanika Brahmin",
    "Tyagi Brahmin",
    "Vaidiki Brahmin",
    "Vaikhanasa Brahmin",
    "Velanadu Brahmin",
    "Vyas Brahmin",
    "Shetty",
    "Mera",
    "Mukkulathor",
    "Paswan",
    "Jeer",
    "Brahmin Jijhotia",
    "Nath",
    "Koiri",
    "Brahmin Malviya",
    "Darji",
    "Amil Sindhi",
    "Baibhand Sindhi",
    "Bhanusali Sindhi",
    "Bhatia Sindhi",
    "Chhapru Sindhi",
    "Dadu Sindhi",
    "Hyderabadi Sindhi",
    "Larai Sindhi",
    "Larkana Sindhi",
    "Lohana Sindhi",
    "Naika",
    "Rohiri Sindhi",
    "Sahiti Sindhi",
    "Sakkhar Sindhi",
    "Sehwani Sindhi",
    "Shikarpuri Sindhi",
    "Thatai Sindhi"
  ]
  muslim_castes = [
    "Muslim - Ansari",
    "Muslim - Arain",
    "Muslim - Awan",
    "Muslim - Bohra",
    "Muslim - Dekkani",
    "Muslim - Dudekula",
    "Muslim - Hanafi",
    "Muslim - Jat",
    "Muslim - Khoja",
    "Muslim - Lebbai",
    "Muslim - Malik",
    "Muslim - Mapila",
    "Muslim - Maraicar",
    "Muslim - Memon",
    "Muslim - Mughal",
    "Muslim - Others",
    "Muslim - Pathan",
    "Muslim - Qureshi",
    "Muslim - Rajput",
    "Muslim - Rowther",
    "Muslim - Shafi",
    "Muslim - Sheikh",
    "Muslim - Siddiqui",
    "Muslim - Syed",
    "Muslim - UnSpecified",
    "Other Caste",
    "Don't wish to specify",
  ]
  christian_division = [
    "Adventist",
    "Anglican / Episcopal",
    "Anglo-Indian",
    "Apostolic",
    "Assembly of God (AG)",
    "Baptist",
    "Born Again",
    "Brethren",
    "Calvinist",
    "Chaldean Syrian (Assyrian)",
    "Church of Christ",
    "Church of God",
    "Church of North India",
    "Church of South India",
    "Congregational",
    "Evangelist",
    "Jacobite",
    "Jehovah's Witnesses",
    "Knanaya",
    "Knanaya Catholic",
    "Knanaya Jacobite",
    "Latin Catholic",
    "Latter day saints",
    "Lutheran",
    "Malabar Independent Syrian Church",
    "Malankara Catholic",
    "Marthoma",
    "Melkite",
    "Mennonite",
    "Methodist",
    "Moravian",
    "Orthodox",
    "Pentecost",
    "Presbyterian",
    "Protestant",
    "Reformed Baptist",
    "Reformed Presbyterian",
    "Roman Catholic",
    "Seventh-day Adventist",
    "St. Thomas Evangelical",
    "Syrian Catholic",
    "Syrian Jacobite",
    "Syrian Orthodox",
    "Syro Malabar",
    "Christian - Others",
    "Don't wish to specify"
  ]
  christian_castes = [
    "Adi Dravidar",
    "Chettiar / Chettiyar",
    "Thevar / Mukkulathor",
    "Paravar / Bharathar / Fernando",
    "Gounder",
    "Kamma",
    "Kapu",
    "Madiga",
    "Mahar",
    "Mala",
    "Mangalorean",
    "Mudaliar / Mudaliyar",
    "Mukkuvar",
    "Nadar",
    "Naidu",
    "Oraon / Kurukh",
    "Padmashali / Padmasali",
    "Pallar / Devendrakula Vellalar",
    "Parkavakulam / Udayar",
    "Pillai",
    "Pulayar / Cheramar / Cherumar",
    "Rajaka / Vannar",
    "Reddy",
    "Sambavar",
    "SC",
    "Setti Balija",
    "ST",
    "Vaniya Chettiar",
    "Vanniya Kula Kshatriyar",
    "Vellalar",
    "Vishwakarma",
    "Yadav / Yadavar",
    "Others",
    "Don't know caste",
    "Don't wish to specify"
  ]
  rasies = [
    "Mesham - Aries",
    "Rishabam - Taurus",
    "Midhunam - Gemini",
    "Kadagam - Cancer",
    "Simmam - Leo",
    "Kanni - Virgo",
    "Thulaam - Libra",
    "Viruchigam - Scorpio",
    "Dhanusu - Sagittarius",
    "Magaram - Capricorn",
    "Kumbam - Aquarius",
    "Meenam - Pisces"
  ]

  // Update

  @Input() id: number;
  @Input() isUpdate: boolean;
  logId: number;
  
  uImgURL: any;
  uImgURL1: any;
  uImgURL2: any;
  uImagePath: any;
  uStoreImg: any;
  uStoreImg1: any;
  uStoreImg2: any;

    upreview(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.uImagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.uImgURL = reader.result; 
        this.uStoreImg = btoa(this.uImgURL);
      }
  
    }
  
    upreview1(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.uImagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.uImgURL1 = reader.result; 
        this.uStoreImg1 = btoa(this.uImgURL1);
      }
    }
  
    upreview2(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.uImagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.uImgURL2 = reader.result; 
        this.uStoreImg2 = btoa(this.uImgURL2);
      }
    }
  
    uresetFileUploader() { 
      this.uImgURL = null;
      this.uImgURL1 = null;
      this.uImgURL2 = null;  

      this.uStoreImg = null
      this.uStoreImg1 = null
      this.uStoreImg2 = null
    }
  
    uresetFileUploader1() { 
      this.uImgURL1 = null;
      this.uImgURL2 = null;

      this.uStoreImg1 = null
      this.uStoreImg2 = null
    }
  
    uresetFileUploader2() { 
      this.uImgURL2 = null;

      this.uStoreImg1 = null
      this.uStoreImg2 = null
    }
  

  // image

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      this.storeImg = btoa(this.imgURL);
    }

  }

  preview1(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL1 = reader.result; 
      this.storeImg1 = btoa(this.imgURL1);
    }
  }

  preview2(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL2 = reader.result; 
      this.storeImg2 = btoa(this.imgURL2);
    }
  }

  resetFileUploader() { 
    this.imgURL = null;
    this.imgURL1 = null;
    this.imgURL2 = null;  

    // this.base64Img1 = null;
    // this.base64Img2 = null;
    // this.base64Img3 = null;
  }

  resetFileUploader1() { 
    this.imgURL1 = null;
    this.imgURL2 = null;

    // this.base64Img2 = null;
    // this.base64Img3 = null;
  }

  resetFileUploader2() { 
    this.imgURL2 = null;
    // this.base64Img3 = null;
  }


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private profileService: ProfileService
  ) { 
    this.createRegForm(); 
    const tok = localStorage.getItem('token');
    if (tok) {
      console.log('kjhgfds', tok)
      this.updateProfile(tok);
    }
  }

  ngOnInit(): void { 
    this.submitted = false;
    const tok = localStorage.getItem('token');
    if (tok) {
      console.log('kjhgfds', tok)
      this.updateProfile(tok);
    }
  }

  createRegForm() {
    this.regForm = this.fb.group({
      image: [''],
      image1: [''],
      image2: [''],
      name: ['',  [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      age:['', [Validators.required, Validators.min(18), Validators.max(50)]],
      dob:['', [Validators.required]],
      email:['', [Validators.email]],
      password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      gender: ['', Validators.required],
      birth_time:[''],
      birth_place:[''],
      religion:['', [Validators.required]],
      division:[''],
      caste:[''],
      subcaste:[''],
      gothram:[''],
      star:[''],
      rasi:[''],
      qualification:[''],
      job:[''],
      workplace:[''],
      income:[''],
      height:['', [Validators.required, Validators.min(4), Validators.max(9)]],
      weight:['', [Validators.required, Validators.min(30), Validators.max(95)]],
      mother_tongue:[''],
      known_language:[''],
      marital_status:[''],
      talents:[''],
      hobbies:[''],
      vehicle_driving:new FormControl(null),
      disabilities:[''],

    // Horoscope
      rasibox11:[''],
      rasibox12:[''],
      rasibox13:[''],
      rasibox14:[''],
      rasibox15:[''],
      rasibox16:[''],
      rasibox17:[''],
      rasibox18:[''],
      rasibox19:[''],
      rasibox110:[''],
      rasibox111:[''],
      rasibox112:[''],

      rasibox21:[''],
      rasibox22:[''],
      rasibox23:[''],
      rasibox24:[''],
      rasibox25:[''],
      rasibox26:[''],
      rasibox27:[''],
      rasibox28:[''],
      rasibox29:[''],
      rasibox210:[''],
      rasibox211:[''],
      rasibox212:[''],
      
      // Family details
      father_name:[''],
      father_occupation:[''],
      mother_name:[''],
      mother_occupation:[''],
      contact_main:['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      contact_sup:[''],
      sibiling_count:[''],
      family_status:[''],
      properties:[''],
      other_details:[''],

      // Partner Expectations
      expected_qualification:[''],
      expected_place:[''],
      expected_income:[''],
      expected_caste:[''],
      expected_subcaste:[''],
      expected_marital_status: [],
      age_difference:[''],
      expected_height:['', [ Validators.maxLength(25) ]],
      expected_weight:['', [ Validators.maxLength(25) ]],
      expectations:['']

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.regForm.controls; }

  updateProfile(tok) {
    const token = atob(tok.split('.')[1])
    this.logId = JSON.parse(token).id;
    console.log(this.logId, 'parse');

    if (this.id == this.logId && this.isUpdate) {
      this.profileService.getProfileById(this.id).subscribe((res) => {
        console.log(res['name']);

        this.uImgURL = atob(res['image']);
        this.uImgURL1 = atob(res['image1']);
        this.uImgURL2 = atob(res['image2']);

        this.regForm.patchValue({
          name: res['name'],
          age: res['age'],
          dob: res['dob'],
          email: res['email'],
          password: res['password'],
          gender: res['gender'],
          birth_time: res['birth_time'],
          birth_place: res['birth_place'],
          religion: res['religion'],
          division: res['division'],
          caste: res['caste'],
          subcaste: res['subcaste'],
          gothram: res['gothram'],
          star: res['star'],
          rasi: res['rasi'],
          qualification: res['qualification'],
          job: res['job'],
          workplace: res['workplace'],
          income: res['income'],
          height: res['height'],
          weight: res['weight'],
          mother_tongue: res['mother_tongue'],
          known_language: res['known_language'],
          marital_status: res['marital_status'],
          talents: res['talents'],
          hobbies: res['hobbies'],
          vehicle_driving: res['vehicle_driving'],
          disabilities: res['disabilities'],
    
        // Horoscope
          rasibox11: res['rasibox11'],
          rasibox12: res['rasibox12'],
          rasibox13: res['rasibox13'],
          rasibox14: res['rasibox14'],
          rasibox15: res['rasibox15'],
          rasibox16: res['rasibox16'],
          rasibox17: res['rasibox17'],
          rasibox18: res['rasibox18'],
          rasibox19: res['rasibox19'],
          rasibox110: res['rasibox110'],
          rasibox111: res['rasibox111'],
          rasibox112: res['rasibox112'],
    
          rasibox21: res['rasibox21'],
          rasibox22: res['rasibox22'],
          rasibox23: res['rasibox23'],
          rasibox24: res['rasibox24'],
          rasibox25: res['rasibox25'],
          rasibox26: res['rasibox26'],
          rasibox27: res['rasibox27'],
          rasibox28: res['rasibox28'],
          rasibox29: res['rasibox29'],
          rasibox210: res['rasibox210'],
          rasibox211: res['rasibox211'],
          rasibox212: res['rasibox212'],
          
          // Family details
          father_name: res['father_name'],
          father_occupation: res['father_occupation'],
          mother_name: res['mother_name'],
          mother_occupation: res['mother_occupation'],
          contact_main: res['contact_main'],
          contact_sup: res['contact_sup'],
          sibiling_count: res['sibiling_count'],
          family_status: res['family_status'],
          properties: res['properties'],
          other_details: res['other_details'],
    
          // Partner Expectations
          expected_qualification: res['expected_qualification'],
          expected_place: res['expected_place'],
          expected_income: res['expected_income'],
          expected_caste: res['expected_caste'],
          expected_subcaste: res['expected_subcaste'],
          expected_marital_status: res['expected_marital_status'],
          age_difference: res['age_difference'],
          expected_height: res['expected_height'],
          expected_weight: res['expected_weight'],
          expectations: res['expectations'],
    
        });

      });
    }
  }


  onSubmit() {
    this.submitted = true;

    this.detail = this.regForm.value;
    console.log(this.detail);
    this.detail['image'] = this.storeImg;
    this.detail['image1'] = this.storeImg1;
    this.detail['image2'] = this.storeImg2;
    if (this.regForm.invalid) { return; }
    if (this.id != this.logId && !this.isUpdate) {
      this.profileService.signUp(this.detail).subscribe((res) => {
        console.log('registered');
        this.registered = true;
        alert('REGISTRATION SUCCESSFULLY COMPLETED!');
        this.router.navigate(['/profiles'])
        this.regForm.reset();
      });
    }
    else {
      this.detail['image'] = this.uStoreImg;
      this.detail['image1'] = this.uStoreImg1;
      this.detail['image2'] = this.uStoreImg2;
      this.profileService.updateAccount(this.id, this.detail).subscribe((res) => {
        alert('PROFILE UPDATED SUCCESSFULLY!');
      });
    }
  }

}
