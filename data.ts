import { PersonalInfo, Experience, Project, Education, Certification, Skills } from './types';

interface SiteContent {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  experiences: Experience[];
  keyProjects: Project[];
  education: Education[];
  certifications: Certification[];
  skills: Skills;
}

interface UiStrings {
    [key: string]: string;
}

export const siteData: { en: SiteContent; ar: SiteContent } = {
  en: {
    personalInfo: {
      name: 'Mohammed Nassim Ebrahim',
      title: 'Electrical Engineer & Quality Control Engineer',
      address: 'Almokatam, Cairo, Egypt',
      phone: ['01067393757', '01001908974'],
      email: 'mn272725@gmail.com',
      nationality: 'Egyptian',
      maritalStatus: 'Single',
      dateOfBirth: '01/11/1987',
      linkedin: 'https://www.linkedin.com/in/mohammed-nassim-04462b28b/',
    },
    professionalSummary:
      'Accomplished Electrical Engineer with over 12 years of progressive experience in project management, infrastructure development, and electrical systems. Proven expertise in leading large teams, managing complex projects, and ensuring operational excellence. Skilled in electrical system design, installation, testing, and maintenance across various industrial and commercial projects. Currently enhancing professional knowledge through continuous education in engineering and administrative fields.',
    experiences: [
        {
            role: 'Quality Control Engineer (QC)',
            company: 'Bin Sammar Trading and Construction Company',
            location: 'Makkah, Saudi Arabia',
            period: '07/2020 – 09/2023',
            details: [
              'Managed quality control for major infrastructure projects, including intersections of Fourth Ring Road with Jabal Thawr, Al-Laith, and Al-Sail Roads.',
              'Organized site activities, coordinated technical documentation, and ensured compliance with project specifications and quality standards.',
              'Contributed to the successful preliminary handover of the Fourth Ring Road and Al-Laith Road intersection through effective planning.',
              'Proactively prevented project withdrawal and protected the company from potential delay penalties.',
            ],
          },
          {
            role: 'Director of Electricity Department',
            company: 'Bin Sammar Trading and Construction Company',
            location: 'Makkah, Saudi Arabia',
            period: '08/2017 - 06/2020',
            details: [
              'Led comprehensive electrical operations and project management, overseeing system design, installation, testing, and maintenance.',
              'Managed client relationships and stakeholder communications to ensure project success.',
              'Supervised a team of electrical engineers across multiple projects in the Makkah region.',
              'Collaborated on pricing and tendering for future projects and developed optimal workflow strategies.',
              'Provided leadership, guidance, and training to a team of 50 employees.',
            ],
          },
          {
            role: 'Electrical Project Engineer',
            company: 'BinSammar Trading and Construction Company',
            location: 'Makkah, Saudi Arabia',
            period: '12/2016 – 11/2017',
            details: [
              'Served as site manager for King Faisal Hospital maintenance, responsible for periodic maintenance work.',
              'Prepared technical reports and executed maintenance for Caterpillar backup generators (3 MVA).',
              'Performed maintenance for UPS systems, isolation systems, nurse call systems, and fire alarms.',
              'Managed a team of 20 electricians and 40 workers, coordinating with subcontractors.',
            ],
          },
           {
            role: 'Site Manager',
            company: 'BinSammar Trading and Construction Company',
            location: 'Makkah, Saudi Arabia',
            period: '09/2013 - 11/2016',
            details: [
                'Managed site operations for Hajj preparations in the Holy Sites of Makkah Al-Mukaromah.',
                'Collaborated on expansion work for pilgrim camps in Arafat, Mina, and Muzdalifah.',
                'Supervised implementation and managed electrical maintenance for over 3,000 overnight camps.',
                'Led approximately 150 electricians and 300 workers during Hajj season.',
            ],
          },
          {
            role: 'Electrical Site Engineer',
            company: 'Siemens',
            location: '6th of October, Egypt',
            period: '01/2011 – 08/2013',
            details: [
              'Supervised electrical wiring and related tasks for company premises and sites.',
              'Led technician teams in installation and commissioning of electrical systems for major industrial projects.',
              'Conducted regular site inspections to identify and resolve electrical issues.',
              'Coordinated with clients, architects, and contractors to develop detailed electrical plans.',
            ],
          },
    ],
    keyProjects: [
        {
            category: "Quality Control Bridge Construction",
            title: "Fourth Ring Road & Al-Laith Road Intersection",
            description: "Oversaw all project disciplines, including earthworks, backfilling, asphalt paving, structural, and electrical works. Managed ITPs, MRIs, IRs, and coordinated with consultants to ensure full compliance and smooth handover."
        },
        {
            category: "Quality Control Bridge Construction",
            title: "Fourth Ring Road & Jabal Thawr Road Intersection",
            description: "Led quality control for all construction phases. Ensured systematic preparation and approval of documentation, resolved technical challenges, and protected the company from delays."
        },
        {
            category: "Bridge Construction",
            title: "Fourth Ring Road & Al-Sail Road Intersection",
            description: "Designed and constructed lighting systems for 9 bridges with 200 highmast lighting poles and 700 12m poles. Completed 70% of electrical work before the COVID-19 pandemic."
        },
        {
            category: "Pilgrim Camp Projects",
            title: "Pilgrim Camps Establishment & Maintenance",
            description: "Designed and constructed electrical systems for 500 camps and managed electrical maintenance for 3,000 camps during three consecutive Hajj seasons, leading a large team of electricians and assistants."
        }
    ],
    education: [
      {
        degree: 'Bachelor of Electrical Power & Machines',
        institution: 'Tanta University, Egypt',
        period: '09/2004 - 06/2009',
        grade: 'Good',
      },
    ],
    certifications: [
        {
            title: 'Solar Energy and Electrical System Design',
            issuer: 'University at Buffalo (Coursera)',
            date: '09/2023',
            skills: 'PV system analysis, requirements evaluation, design considerations.',
            verification: 'https://coursera.org/share/9d0f6d87b40c48ef644c30d6e3378ec8'
        },
        {
            title: 'Career Essentials in Generative AI',
            issuer: 'Microsoft and LinkedIn',
            date: '09/2023',
            skills: 'Generative AI models understanding, ethical considerations, impact assessment.',
            verification: 'https://www.linkedin.com/learning/certificates/2ec9bbe3da6d3e941ba4d3cb83f25261da4ab85ebb3094baec2ced36566'
        },
        {
            title: 'Exploring Renewable Energy Schemes',
            issuer: 'University of Pennsylvania (Coursera)',
            date: '09/2023',
            skills: 'Photovoltaic, wind, and hydroelectric energy systems assessment, renewable energy implementation.',
            verification: 'https://coursera.org/share/123433972b94122e0f0c7fb02f5a5e08'
        },
        {
            title: 'Foundations of Project Management',
            issuer: 'Google',
            date: '09/2023',
            skills: 'Project management methodologies, organizational structure impact, lifecycle management.',
            verification: 'https://coursera.org/share/71dda898543c43a9688f994a6d313013'
        },
        {
            title: 'Construction Project Management',
            issuer: 'Columbia University',
            date: '09/2023',
            skills: 'Risk Management, Contract Management, Project Schedules, Construction Estimating.',
            verification: 'https://coursera.org/share/d19220b14845fbf33d56798abc628da4'
        }
    ],
    skills: {
      'Technical Skills': ['Electrical system design', 'Troubleshooting', 'Continuous improvement', 'Project management'],
      'Software Proficiency': ['AutoCAD', 'DIALux', 'E-TAP', 'Microsoft Office'],
      'Languages': ['Arabic (Native)', 'English (Professional)'],
      'Leadership': ['Team management', 'Strategic planning', 'Quality assurance'],
    },
  },
  ar: {
    personalInfo: {
        name: 'محمد نسيم إبراهيم',
        title: 'مهندس كهرباء ومهندس ضبط جودة',
        address: 'المقطم، القاهرة، مصر',
        phone: ['01067393757', '01001908974'],
        email: 'mn272725@gmail.com',
        nationality: 'مصري',
        maritalStatus: 'أعزب',
        dateOfBirth: '01/11/1987',
        linkedin: 'https://www.linkedin.com/in/mohammed-nassim-04462b28b/',
      },
      professionalSummary:
        'مهندس كهرباء بارع يتمتع بخبرة تزيد عن 12 عامًا في إدارة المشاريع وتطوير البنية التحتية والأنظمة الكهربائية. خبرة مثبتة في قيادة فرق كبيرة وإدارة المشاريع المعقدة وضمان التميز التشغيلي. ماهر في تصميم الأنظمة الكهربائية وتركيبها واختبارها وصيانتها في مختلف المشاريع الصناعية والتجارية. يعمل حاليًا على تعزيز المعرفة المهنية من خلال التعليم المستمر في المجالات الهندسية والإدارية.',
      experiences: [
          {
              role: 'مهندس ضبط جودة',
              company: 'شركة بن سمار للتجارة والمقاولات',
              location: 'مكة المكرمة، المملكة العربية السعودية',
              period: '07/2020 – 09/2023',
              details: [
                'إدارة ضبط الجودة لمشاريع البنية التحتية الكبرى، بما في ذلك تقاطعات الطريق الدائري الرابع مع جبل ثور والليث والسيل.',
                'تنظيم أنشطة الموقع، وتنسيق الوثائق الفنية، وضمان الامتثال لمواصفات المشروع ومعايير الجودة.',
                'المساهمة في التسليم الأولي الناجح لتقاطع الطريق الدائري الرابع وطريق الليث من خلال التخطيط الفعال.',
                'العمل بشكل استباقي على منع سحب المشاريع وحماية الشركة من عقوبات التأخير المحتملة.',
              ],
            },
            {
              role: 'مدير قسم الكهرباء',
              company: 'شركة بن سمار للتجارة والمقاولات',
              location: 'مكة المكرمة، المملكة العربية السعودية',
              period: '08/2017 - 06/2020',
              details: [
                'قيادة العمليات الكهربائية الشاملة وإدارة المشاريع، والإشراف على تصميم الأنظمة وتركيبها واختبارها وصيانتها.',
                'إدارة علاقات العملاء والتواصل مع أصحاب المصلحة لضمان نجاح المشاريع.',
                'الإشراف على فريق من المهندسين الكهربائيين في مشاريع متعددة في منطقة مكة المكرمة.',
                'التعاون في تسعير وعطاءات المشاريع المستقبلية وتطوير استراتيجيات سير العمل المثلى.',
                'توفير القيادة والتوجيه والتدريب لفريق مكون من 50 موظفًا.',
              ],
            },
            {
              role: 'مهندس مشاريع كهربائية',
              company: 'شركة بن سمار للتجارة والمقاولات',
              location: 'مكة المكرمة، المملكة العربية السعودية',
              period: '12/2016 – 11/2017',
              details: [
                'العمل كمدير موقع لصيانة مستشفى الملك فيصل، والمسؤول عن أعمال الصيانة الدورية.',
                'إعداد التقارير الفنية وتنفيذ صيانة مولدات كاتربيلر الاحتياطية (3 ميجا فولت أمبير).',
                'إجراء صيانة لأنظمة UPS وأنظمة العزل وأنظمة استدعاء الممرضات وأجهزة إنذار الحريق.',
                'إدارة فريق مكون من 20 كهربائيًا و 40 عاملًا، والتنسيق مع المقاولين من الباطن.',
              ],
            },
             {
              role: 'مدير موقع',
              company: 'شركة بن سمار للتجارة والمقاولات',
              location: 'مكة المكرمة، المملكة العربية السعودية',
              period: '09/2013 - 11/2016',
              details: [
                  'إدارة عمليات الموقع لتجهيزات الحج في المشاعر المقدسة بمكة المكرمة.',
                  'التعاون في أعمال توسعة مخيمات الحجاج في عرفات ومنى ومزدلفة.',
                  'الإشراف على تنفيذ وإدارة الصيانة الكهربائية لأكثر من 3000 مخيم.',
                  'قيادة ما يقرب من 150 كهربائيًا و 300 عامل خلال موسم الحج.',
              ],
            },
            {
              role: 'مهندس موقع كهرباء',
              company: 'سيمنز',
              location: 'السادس من أكتوبر، مصر',
              period: '01/2011 – 08/2013',
              details: [
                'الإشراف على التمديدات الكهربائية والمهام ذات الصلة لمباني ومواقع الشركة.',
                'قيادة فرق الفنيين في تركيب وتشغيل الأنظمة الكهربائية للمشاريع الصناعية الكبرى.',
                'إجراء عمليات تفتيش منتظمة للموقع لتحديد المشكلات الكهربائية وحلها.',
                'التنسيق مع العملاء والمهندسين المعماريين والمقاولين لوضع خطط كهربائية مفصلة.',
              ],
            },
      ],
      keyProjects: [
          {
              category: "إنشاءات الجسور ومراقبة الجودة",
              title: "تقاطع الطريق الدائري الرابع وطريق الليث",
              description: "الإشراف على جميع تخصصات المشروع، بما في ذلك أعمال الحفر والردم ورصف الأسفلت والأعمال الإنشائية والكهربائية. إدارة خطط الاختبار والتفتيش وطلبات فحص المواد والتنسيق مع الاستشاريين لضمان الامتثال الكامل والتسليم السلس."
          },
          {
              category: "إنشاءات الجسور ومراقبة الجودة",
              title: "تقاطع الطريق الدائري الرابع وجبل ثور",
              description: "قيادة مراقبة الجودة لجميع مراحل البناء. ضمان الإعداد المنهجي والموافقة على الوثائق وحل التحديات الفنية وحماية الشركة من التأخير."
          },
          {
              category: "إنشاءات الجسور",
              title: "تقاطع الطريق الدائري الرابع وطريق السيل",
              description: "تصميم وبناء أنظمة إضاءة لـ 9 جسور بـ 200 عمود إنارة عالي و 700 عمود بطول 12 مترًا. إنجاز 70٪ من الأعمال الكهربائية قبل جائحة COVID-19."
          },
          {
              category: "مشاريع مخيمات الحجاج",
              title: "إنشاء وصيانة مخيمات الحجاج",
              description: "تصميم وإنشاء أنظمة كهربائية لـ 500 مخيم وإدارة الصيانة الكهربائية لـ 3000 مخيم خلال ثلاثة مواسم حج متتالية، وقيادة فريق كبير من الكهربائيين والمساعدين."
          }
      ],
      education: [
        {
          degree: 'بكالوريوس في القوى والآلات الكهربائية',
          institution: 'جامعة طنطا، مصر',
          period: '09/2004 - 06/2009',
          grade: 'جيد',
        },
      ],
      certifications: [
          {
              title: 'تصميم أنظمة الطاقة الشمسية والكهربائية',
              issuer: 'جامعة بافالو (كورسيرا)',
              date: '09/2023',
              skills: 'تحليل أنظمة الطاقة الكهروضوئية، تقييم المتطلبات، اعتبارات التصميم.',
              verification: 'https://coursera.org/share/9d0f6d87b40c48ef644c30d6e3378ec8'
          },
          {
              title: 'أساسيات الحياة المهنية في الذكاء الاصطناعي التوليدي',
              issuer: 'مايكروسوفت ولينكد إن',
              date: '09/2023',
              skills: 'فهم نماذج الذكاء الاصطناعي التوليدي، الاعتبارات الأخلاقية، تقييم الأثر.',
              verification: 'https://www.linkedin.com/learning/certificates/2ec9bbe3da6d3e941ba4d3cb83f25261da4ab85ebb3094baec2ced36566'
          },
          {
              title: 'استكشاف خطط الطاقة المتجددة',
              issuer: 'جامعة بنسلفانيا (كورسيرا)',
              date: '09/2023',
              skills: 'تقييم أنظمة الطاقة الكهروضوئية والرياح والطاقة الكهرومائية، تنفيذ الطاقة المتجددة.',
              verification: 'https://coursera.org/share/123433972b94122e0f0c7fb02f5a5e08'
          },
          {
              title: 'أساسيات إدارة المشاريع',
              issuer: 'جوجل',
              date: '09/2023',
              skills: 'منهجيات إدارة المشاريع، تأثير الهيكل التنظيمي، إدارة دورة حياة المشروع.',
              verification: 'https://coursera.org/share/71dda898543c43a9688f994a6d313013'
          },
          {
            title: 'إدارة مشاريع البناء',
            issuer: 'جامعة كولومبيا',
            date: '09/2023',
            skills: 'إدارة المخاطر، إدارة العقود، جداول المشاريع، تقدير تكاليف البناء.',
            verification: 'https://coursera.org/share/d19220b14845fbf33d56798abc628da4'
          }
      ],
      skills: {
        'Technical Skills': ['تصميم الأنظمة الكهربائية', 'استكشاف الأخطاء وإصلاحها', 'التحسين المستمر', 'إدارة المشاريع'],
        'Software Proficiency': ['أوتوكاد', 'ديالوكس', 'إيتاب', 'مايكروسوفت أوفيس'],
        'Languages': ['العربية (لغة أم)', 'الإنجليزية (احترافية)'],
        'Leadership': ['إدارة الفرق', 'التخطيط الاستراتيجي', 'ضمان الجودة'],
      },
  },
};

export const uiStrings: { en: UiStrings, ar: UiStrings } = {
    en: {
        professionalSummary: 'Professional Summary',
        professionalExperience: 'Professional Experience',
        keyProjects: 'Key Projects',
        skills: 'Skills',
        education: 'Education',
        certifications: 'Certifications',
        'Technical Skills': 'Technical Skills',
        'Software Proficiency': 'Software Proficiency',
        'Languages': 'Languages',
        'Leadership': 'Leadership',
        grade: 'Grade',
        verify: 'Verify',
        allRightsReserved: 'All Rights Reserved.',
        toggleTheme: 'Toggle theme'
    },
    ar: {
        professionalSummary: 'الملخص الاحترافي',
        professionalExperience: 'الخبرة المهنية',
        keyProjects: 'المشاريع الرئيسية',
        skills: 'المهارات',
        education: 'التعليم',
        certifications: 'الشهادات',
        'Technical Skills': 'المهارات الفنية',
        'Software Proficiency': 'إتقان البرامج',
        'Languages': 'اللغات',
        'Leadership': 'القيادة',
        grade: 'التقدير',
        verify: 'التحقق',
        allRightsReserved: 'جميع الحقوق محفوظة.',
        toggleTheme: 'تبديل السمة'
    }
}