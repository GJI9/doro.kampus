/**
 * Doro Kampus — lightweight client-side i18n.
 *
 * Indonesian (id) is the source language and lives in the HTML.
 * Only English (en) strings are defined here, keyed by each element's
 * `data-i18n` attribute. The engine swaps innerHTML / attributes between
 * the captured Indonesian original and the English value.
 *
 * See CLAUDE.md → "Language / i18n" for the rules when adding content.
 */
(function () {
	"use strict";

	var STORAGE_KEY = "doro_lang";
	var DEFAULT_LANG = "id";

	// English strings, keyed by data-i18n / data-i18n-* keys.
	// Special keys: __title, __meta_description.
	var translations = {
		en: {
			// Meta
			__title: "Doro Kampus - Every Student, One Platform | All-in-One Campus App",
			__meta_description:
				"Doro Kampus - An integrated platform for Indonesian students. Manage your class schedule, join campus communities, and find scholarships & internships in one app.",

			// Nav
			"nav.home": "Home",
			"nav.features": "Features",
			"nav.about": "About Us",
			"nav.pilot": "Pilot Program",

			// Hero
			"hero.title": "Every Student<span>One Platform</span>",
			"hero.desc": "Timetable, community, and InfoHub — one ecosystem for Indonesian students.",

			// Features
			"features.subtitle": "Key Features",
			"features.title": "Every favorite campus feature, in one student app.",
			"feat.timetable.title": "Timetable",
			"feat.timetable.desc":
				"Build your class schedule in one click, set reminders, and share with friends. Write reviews of classes and lecturers so others can choose better.",
			"feat.community.title": "Community",
			"feat.community.desc": "Anonymous and real-name forums for discussions that are lively, yet safe.",
			"feat.infohub.title": "InfoHub",
			"feat.infohub.desc":
				"One place for every student opportunity — scholarships, internships, events, and study tools — automatically curated and easy to access.",
			"feat.chat.title": "Open Chat & Private Messages",
			"feat.chat.desc":
				"A safe space to share stories and ask questions without worrying about your identity being revealed.",
			"feat.test.title": "Self-Development Tests & Surveys",
			"feat.test.desc":
				"Take personality, aptitude, and campus surveys to get to know yourself better.",
			"feat.marketplace.title": "Student Marketplace",
			"feat.marketplace.desc":
				"Buy and sell secondhand goods, textbooks, and other campus essentials with fellow students.",
			"feat.matching.title": "Friend Feature (Student Matching)",
			"feat.matching.desc":
				"Find classmates, project partners, or study buddies based on shared interests and majors.",
			"badge.comingsoon": "Coming Soon",

			// About
			"about.title": "About DORO",
			"about.desc":
				"Doro is a platform that helps Indonesian students live campus life more efficiently and connected. In a single app, you can manage your schedule, join communities, and quickly discover opportunities ranging from internships to scholarships.",

			// About 2 (Why / Solution)
			"about2.subtitle": "Why DORO?",
			"about2.problem":
				"Academic information, announcements, scholarships, and campus communities are scattered across many places — students have to hunt for them one by one.",
			"about2.solution": "Solution",
			"about2.item1.title": "Information Integration",
			"about2.item1.desc": "All the important student links on a single screen.",
			"about2.item2.title": "Connected Community",
			"about2.item2.desc": "Safe, structured forums to share and discuss.",
			"about2.item3.title": "Quick Action",
			"about2.item3.desc":
				"Save, share, and enable notifications so information can be acted on right away.",

			// Process
			"process.subtitle": "Install DORO Now",
			"process.title": "How Do You Use DORO?",
			"process.step1.title": "Download the App",
			"process.step1.desc": "You can download the app from the Google Play Store or the Apple App Store.",
			"process.step2.title": "Choose Your University and Major",
			"process.step2.desc": "Use your campus email, and the app will automatically adapt to your campus.",
			"process.step3.title": "Start Using Doro",
			"process.step3.desc":
				"Enjoy all the features — manage your schedule, join communities, and find the InfoHub, all in one place.",

			// Goal / Partners
			"goal.title": "Partners & Collaboration",
			"goal.desc":
				"We welcome collaboration with brands, agencies, and institutions that want to reach students in a more authentic and relevant way. Through the Doro platform, partners can interact directly with campus communities, run digital campaigns, or offer targeted internship and scholarship opportunities.",
			"goal.contact": "<b>Partner Contact</b>: doro@dorokampus.com",

			// Screenshot
			"shot.subtitle": "Clean Design",
			"shot.title": "DORO Apps Screenshot",
			"shot.desc":
				"Enjoy a clean, intuitive interface designed specifically for students' needs. Doro makes it easy to navigate and reach key features, so you can focus on what matters.",

			// Vision
			"vision.subtitle": "Vision",
			"vision.title": "Our vision ahead",
			"vision.card1.title": "Boosting user interaction and engagement",
			"vision.card1.li1": '<i class="dripicons-checkmark"></i> Core features for months 0–6 already developed',
			"vision.card1.li2": '<i class="dripicons-minus"></i> Chat',
			"vision.card1.li3": '<i class="dripicons-minus"></i> Tests and Surveys',
			"vision.card2.title": "Expanding students' social and economic connections",
			"vision.card2.li1": '<i class="dripicons-minus"></i> Marketplace',
			"vision.card2.li2": '<i class="dripicons-minus"></i> Student Matching',
			"vision.card3.title": "A smart campus powered by personalization and automation",
			"vision.card3.li1": '<i class="dripicons-minus"></i> AI Assistance',
			"vision.card3.li2": '<i class="dripicons-minus"></i> Automatic Recommendations',

			// FAQ
			"faq.subtitle": "FAQ",
			"faq.title": "Frequently Asked Questions",
			"faq.q1": "Does Doro guarantee anonymity?",
			"faq.a1":
				"Yes. The anonymous forum and your real identity are kept completely separate, and risky content is filtered automatically.",
			"faq.q2": "How long does a report or moderation take?",
			"faq.a2": "On average between 24–72 hours after the report is received.",
			"faq.q3": "Who can use Doro?",
			"faq.a3": "Doro can be used by all university students in Indonesia.",
			"faq.q4": "What happens if my account is deleted?",
			"faq.a4": "All data is completely deleted, except for what is required by law.",
			"faq.q5": "Is Doro paid?",
			"faq.a5": "No. All of Doro's main features can be used for free.",
			"faq.q6": "Is Doro registered with Komdigi?",
			"faq.a6":
				"Doro is <b>registered as an Electronic System Operator (PSE)</b> with Kominfo through the Komdigi portal.",

			// Security & Privacy
			"sec.subtitle": "Security & Privacy",
			"sec.title": "Our Commitment to Protecting Your Data",
			"sec.desc":
				"Doro complies with Law No. 27 of 2022 on Personal Data Protection (UU PDP) and only processes data after obtaining explicit consent from users.",
			"sec.box1.title": "Minimal Data Collection",
			"sec.box1.desc": "We only collect the data we need, with a clear and transparent purpose.",
			"sec.box2.title": "User Rights",
			"sec.box2.desc": "You have the right to access, correct, and delete your personal data at any time.",
			"sec.box3.title": "Transfer Notification",
			"sec.box3.desc": "We will notify you before any cross-border data transfer.",
			"sec.box4.title": "Quick Response",
			"sec.box4.desc": "User requests are answered within a maximum of 3×24 hours.",

			// Legal link labels (shared with footer)
			"link.terms": "Terms of Service",
			"link.privacy": "Privacy Policy",
			"link.guideline": "Community Guidelines",
			"link.delete": "How to Delete Your Account",

			// Official contact
			"contact.subtitle": "Official Contact",
			"contact.title": "Contact Us",
			"contact.desc": "Our team is ready to help you. Response within a maximum of 3×24 hours.",
			"contact.email.label": "Email",
			"contact.wa.label": "WhatsApp",
			"contact.dpo.label": "DPO (Data Protection Officer)",
			"contact.pse.label": "PSE Status",
			"contact.download": "Download the App Now",
			"contact.joinpilot": "Join the Pilot Program",

			// Pilot program
			"pilot.subtitle": "Pilot Program",
			"pilot.title": "Come join and grow together with us",
			"pilot.who.title": "Who can join?",
			"pilot.who.desc":
				"Universities, communities, companies, institutions, and individuals who want to build a more connected campus ecosystem.",
			"pilot.benefit.title": "Benefits",
			"pilot.benefit.desc":
				"Your collaboration will contribute directly to Doro's development, and every participating partner or campus will receive a report on the pilot program's results.",
			"form.email.label": "Official email (campus / organization / company)",
			"form.email.ph": "contact@yourorganization.com",
			"form.institution.label": "Institution / Organization",
			"form.institution.ph": "Doro University / PT Doro Indonesia / Doro Student Community",
			"form.dept.label": "Department / Field",
			"form.dept.ph": "Information Systems / HR & Partnership / Student Council",
			"form.role.label": "Role",
			"form.role.ph": "Student / Lecturer / Campus Admin / Organization Representative / Brand Partner",
			"form.wa.label": "WhatsApp Contact",
			"form.wa.ph": "08123456789",
			"form.message.label": "Your Message",
			"form.message.ph": "Tell us about your collaboration goals or your interest in Doro's pilot program...",
			"form.submit": "Send via WhatsApp",

			// Footer
			"footer.desc":
				"A platform that helps Indonesian students live campus life more efficiently and connected.",
			"footer.nav.title": "Navigation",
			"footer.nav.vision": "Vision",
			"footer.legal.title": "Legal",
			"footer.follow.title": "Follow Us",
			"footer.follow.desc": "Get the latest updates about Doro Kampus.",
			"footer.copyright": "© 2025 Doro Kampus. All rights reserved.",
		},

		// Indonesian values are normally the HTML default (captured at runtime).
		// The exception is <input>/<textarea> placeholders: the placeholdem plugin
		// clears the native placeholder at init before we can capture it, so the
		// Indonesian originals are declared here and always set from the dictionary.
		id: {
			"form.email.ph": "contact@namaorganisasi.com",
			"form.institution.ph": " Universitas Doro / PT Doro Indonesia / Komunitas Mahasiswa Doro",
			"form.dept.ph": "Sistem Informasi / HR & Partnership / BEM",
			"form.role.ph": "Mahasiswa / Dosen / Admin Kampus / Perwakilan Organisasi / Brand Partner",
			"form.wa.ph": "08123456789",
			"form.message.ph": "Ceritakan tujuan kolaborasi atau ketertarikan kamu terhadap program pilot Doro...",
		},
	};

	// Runtime capture of the Indonesian originals (source of truth stays in HTML).
	var htmlOriginals = {}; // key -> innerHTML
	var attrOriginals = {}; // key + "|" + attr -> value
	var metaOriginals = {}; // __title / __meta_description
	var initialized = false;

	var ATTR_MAP = {
		"data-i18n-placeholder": "placeholder",
		"data-i18n-alt": "alt",
		"data-i18n-aria": "aria-label",
	};

	function metaDescEl() {
		return document.querySelector('meta[name="description"]');
	}

	function captureOriginals() {
		var i, el, key, attrName, dataAttr;
		var nodes = document.querySelectorAll("[data-i18n]");
		for (i = 0; i < nodes.length; i++) {
			el = nodes[i];
			key = el.getAttribute("data-i18n");
			if (!(key in htmlOriginals)) htmlOriginals[key] = el.innerHTML;
		}
		for (dataAttr in ATTR_MAP) {
			attrName = ATTR_MAP[dataAttr];
			nodes = document.querySelectorAll("[" + dataAttr + "]");
			for (i = 0; i < nodes.length; i++) {
				el = nodes[i];
				key = el.getAttribute(dataAttr) + "|" + attrName;
				if (!(key in attrOriginals)) attrOriginals[key] = el.getAttribute(attrName) || "";
			}
		}
		// Guard: capture the Indonesian originals only once. Without this, the
		// window-load re-capture would overwrite them with an already-applied
		// (possibly English) title/description.
		if (!("__title" in metaOriginals)) metaOriginals.__title = document.title;
		if (!("__meta_description" in metaOriginals)) {
			var md = metaDescEl();
			metaOriginals.__meta_description = md ? md.getAttribute("content") : null;
		}
	}

	function apply(lang) {
		// A dictionary value (any language) always wins; otherwise fall back to the
		// captured Indonesian original from the HTML.
		var dict = translations[lang] || {};
		var i, el, key, attrName, dataAttr, nodes, val;

		nodes = document.querySelectorAll("[data-i18n]");
		for (i = 0; i < nodes.length; i++) {
			el = nodes[i];
			key = el.getAttribute("data-i18n");
			val = dict[key] != null ? dict[key] : htmlOriginals[key];
			if (val != null && el.innerHTML !== val) el.innerHTML = val;
		}

		for (dataAttr in ATTR_MAP) {
			attrName = ATTR_MAP[dataAttr];
			nodes = document.querySelectorAll("[" + dataAttr + "]");
			for (i = 0; i < nodes.length; i++) {
				el = nodes[i];
				key = el.getAttribute(dataAttr);
				val = dict[key] != null ? dict[key] : attrOriginals[key + "|" + attrName];
				if (val != null) el.setAttribute(attrName, val);
			}
		}

		document.title = dict.__title != null ? dict.__title : metaOriginals.__title;
		var md = metaDescEl();
		if (md) {
			md.setAttribute("content", dict.__meta_description != null ? dict.__meta_description : metaOriginals.__meta_description);
		}

		document.documentElement.setAttribute("lang", lang);
		window.doroLang = lang;
		updateSwitchUI(lang);
		try {
			localStorage.setItem(STORAGE_KEY, lang);
		} catch (e) {}
	}

	function updateSwitchUI(lang) {
		var opts = document.querySelectorAll(".doro-lang-switch [data-lang]");
		for (var i = 0; i < opts.length; i++) {
			var isActive = opts[i].getAttribute("data-lang") === lang;
			opts[i].classList.toggle("active", isActive);
			opts[i].setAttribute("aria-pressed", isActive ? "true" : "false");
		}
	}

	function detectInitialLang() {
		var saved;
		try {
			saved = localStorage.getItem(STORAGE_KEY);
		} catch (e) {}
		if (saved === "en" || saved === "id") return saved;
		var nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
		return nav.indexOf("en") === 0 ? "en" : DEFAULT_LANG;
	}

	function bindSwitch() {
		var switches = document.querySelectorAll(".doro-lang-switch [data-lang]");
		for (var i = 0; i < switches.length; i++) {
			switches[i].addEventListener("click", function (e) {
				e.preventDefault();
				apply(this.getAttribute("data-lang"));
			});
			switches[i].addEventListener("keydown", function (e) {
				if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
					e.preventDefault();
					apply(this.getAttribute("data-lang"));
				}
			});
		}
	}

	function init() {
		if (initialized) return;
		initialized = true;
		captureOriginals();
		bindSwitch();
		apply(detectInitialLang());
		// Re-apply after full load in case carousels/plugins clone nodes late.
		window.addEventListener("load", function () {
			captureOriginals();
			apply(window.doroLang || DEFAULT_LANG);
		});
	}

	// Public helper for inline scripts (e.g. the WhatsApp form) to read the language.
	window.doroI18n = {
		lang: function () {
			return window.doroLang || DEFAULT_LANG;
		},
		apply: apply,
	};

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
