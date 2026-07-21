export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  metaDescription: string;
  paragraphs: string[];
  bullets?: string[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'emergency-dental-care',
    name: 'Emergency Dental Care',
    shortDescription: 'Urgent care for existing patients dealing with dental pain or injury.',
    metaDescription:
      'Emergency dental care at Hazel Dell Dentistry in Carmel, IN. Existing patients can contact our office and we will get back to you as soon as possible.',
    paragraphs: [
      'If you are an existing patient, please contact us with an emergency and we will get back to you as soon as possible. If we have not seen you in a while, a comprehensive exam and imaging may be needed prior to treatment.',
    ],
    related: ['dental-crowns', 'composite-dental-filling', 'dental-cleanings-exams'],
  },
  {
    slug: 'clear-aligners',
    name: 'Clear Aligners',
    shortDescription: 'A discreet, nearly invisible way to straighten teeth without traditional braces.',
    metaDescription:
      'Clear aligners at Hazel Dell Dentistry in Carmel, IN — a discreet, effective orthodontic solution using nearly invisible trays to align your smile.',
    paragraphs: [
      'Clear aligners represent a discreet and effective orthodontic solution to crooked teeth, employing nearly invisible trays to progressively align teeth and achieve a more uniform smile. This innovative approach offers an inconspicuous alternative to traditional braces, catering to both aesthetic and functional needs.',
    ],
    related: ['teeth-whitening', 'dental-veneers', 'dental-cleanings-exams'],
  },
  {
    slug: 'dental-cleanings-exams',
    name: 'Dental Cleanings & Exams',
    shortDescription: 'Preventive cleanings and exams offered at every visit to keep your smile healthy.',
    metaDescription:
      'Dental cleanings and exams at Hazel Dell Dentistry in Carmel, IN — a preventive treatment offered at every visit to help protect your oral health.',
    paragraphs: [
      'Though dental cleanings and exams are a basic preventive treatment, they are a very important part of your oral health, which is why we offer this service for every visit you make at our practice. Our dentist and team will professionally clean your teeth and examine your dental health to help you stay healthy. When you visit us for your dental cleaning and exam, you can expect our team to:',
    ],
    bullets: [
      'Remove plaque or tartar (also called dental calculus), helping to prevent tooth decay and periodontal disease.',
      'Floss and polish your teeth for a healthy, bright smile.',
      'Examine your smile for signs of any damaging dental conditions or diseases.',
    ],
    related: ['digital-xrays', 'intraoral-camera', 'panoramic-xray'],
  },
  {
    slug: 'teeth-whitening',
    name: 'Teeth Whitening',
    shortDescription: 'A convenient take-home solution for a brighter, more confident smile.',
    metaDescription:
      'Take-home teeth whitening at Hazel Dell Dentistry in Carmel, IN — a convenient, effective way to lighten dental discoloration for a brighter smile.',
    paragraphs: [
      'Take-home teeth whitening at Hazel Dell Dentistry in Carmel, Indiana, presents a convenient and effective method for achieving a dazzling smile. This at-home solution empowers our patients to lighten dental discoloration and attain a brighter, more confident appearance without the need for extensive in-office treatments.',
    ],
    related: ['dental-veneers', 'clear-aligners', 'dental-cleanings-exams'],
  },
  {
    slug: 'intraoral-camera',
    name: 'Intraoral Camera',
    shortDescription: 'A small, precise camera that gives us a closer look at your teeth and gums.',
    metaDescription:
      'Intraoral camera imaging at Hazel Dell Dentistry in Carmel, IN — high-quality photos of your teeth and gums that help us diagnose and explain your care.',
    paragraphs: [
      'An intraoral camera is a tool we use to get a closer look at different parts of your smile. The intraoral camera is a small, pen-shaped device that we can use to take high-quality color photos of your teeth and gums, as well as other areas of your mouth as needed. Because the intraoral camera is so small and easily maneuverable, we can use it to see angles in your mouth that we cannot easily view with the unaided eye.',
      'We may utilize the intraoral camera to better evaluate your oral health and diagnose dental problems like tooth decay and periodontal disease, as well as tooth damage like a cracked or chipped tooth. The intraoral camera is also useful in following up after a treatment has been completed.',
    ],
    related: ['digital-xrays', 'panoramic-xray', 'dental-cleanings-exams'],
  },
  {
    slug: 'dental-veneers',
    name: 'Dental Veneers',
    shortDescription: 'Ultra-thin custom shells that refine and enhance the appearance of your smile.',
    metaDescription:
      'Dental veneers at Hazel Dell Dentistry in Carmel, IN — custom porcelain or composite shells that conceal imperfections for a refined, balanced smile.',
    paragraphs: [
      'Dental veneers with our dentist in Carmel, Indiana, are a remarkable cosmetic treatment that enhances the appearance of teeth, delivering a refined and captivating smile. These ultra-thin porcelain or composite resin shells are meticulously crafted to conceal various dental imperfections, resulting in a rejuvenated and balanced dental aesthetic.',
    ],
    related: ['teeth-whitening', 'clear-aligners', 'composite-dental-filling'],
  },
  {
    slug: 'snore-guard',
    name: 'Snore Guard',
    shortDescription: 'A custom mandibular advancement device to help reduce snoring and mild sleep apnea.',
    metaDescription:
      'Snore Guard mandibular advancement devices at Hazel Dell Dentistry in Carmel, IN — a custom-fit option to help reduce snoring and mild to moderate sleep apnea.',
    paragraphs: [
      'The Snore Guard is a mandibular advancement device (MAD) designed to reduce or eliminate snoring. MADs can also be used to treat symptoms of mild to moderate obstructive sleep apnea (OSA). The Snore Guard in particular works by gently pulling the lower jaw forward to increase airflow through the upper airway and back of the throat.',
      'The Snore Guard consists of two connected plastic trays. The upper component is fitted to the roof of the mouth, while the lower component creates a ramp around the lower teeth. A central opening allows for mouth breathing.',
      'You can customize the device by following a relatively simple boil-and-bite setup outlined in the accompanying information guide, similar to fitting an athletic mouthguard. With careful fitting and regular use, the Snore Guard can be a good option for those who snore or have OSA.',
    ],
    related: ['dental-cleanings-exams', 'digital-xrays'],
  },
  {
    slug: 'denture-partials',
    name: 'Dentures & Partials',
    shortDescription: 'Custom removable appliances that restore function and beauty when teeth are missing.',
    metaDescription:
      'Dentures and partials at Hazel Dell Dentistry in Carmel, IN — custom-made complete and partial dentures that restore oral function and your smile.',
    paragraphs: [
      'Dentures are removable oral appliances that can replace multiple missing teeth. Dentures can restore your oral function and health and improve the beauty of your smile when you are missing some or all of your teeth. There are two types of dentures: complete dentures and partial dentures.',
      'Dentures can give you back your ability to properly speak and eat, restore your natural facial volume, and enhance your smile’s beauty. Your custom-made dentures will be comfortable, secure, and match the natural aesthetics of your face and smile. If you want to know how we can improve your smile with dentures, give us a call or set up an appointment.',
    ],
    bullets: [
      'A complete denture replaces a full dental arch of teeth. Depending on your individual needs, we may suggest this denture to replace all your teeth in one or both arches. Our dentist may also suggest a denture adhesive to improve the denture’s stability.',
      'A partial denture is utilized when you have natural teeth remaining but have lost multiple teeth. A partial denture usually includes a thin framework or clasps attached to the natural teeth for a secure fit.',
    ],
    related: ['dental-crowns', 'dental-bridges', 'implant-crowns'],
  },
  {
    slug: 'dental-crowns',
    name: 'Dental Crowns',
    shortDescription: 'A custom-made cap that restores a damaged or decayed tooth to its original shape.',
    metaDescription:
      'Dental crowns at Hazel Dell Dentistry in Carmel, IN — custom-made restorations that repair damaged or decayed teeth and restore your natural smile.',
    paragraphs: [
      'A dental crown, or cap, is a restoration used for several purposes. One of the most common uses of a dental crown is to restore a significantly damaged or decayed tooth. This custom-made crown fits over the entire tooth, starting at the gumline, restoring the tooth to its original shape and size. Dental crowns can be made of gold, porcelain, or porcelain fused to metal. Porcelain is usually the material of choice because it can be matched to the natural appearance and color of your teeth. Our dentist will help you determine which type of dental crown is right for your smile.',
      'Your smile may benefit from a crown if a tooth is damaged or decayed to the point that it will not be repaired by a dental filling. Crowns are also utilized for several other restorative and aesthetic purposes, including:',
    ],
    bullets: [
      'Protecting a tooth after root canal therapy',
      'Anchoring and attaching a dental bridge',
      'Covering and completing a dental implant',
      'Enhancing the appearance of your smile',
      'Fixing a misshapen tooth',
      'Strengthening a fractured or weak tooth',
      'Supporting a large filling where there is little natural tooth structure',
    ],
    related: ['implant-crowns', 'dental-bridges', 'composite-dental-filling'],
  },
  {
    slug: 'implant-crowns',
    name: 'Implant Crowns',
    shortDescription: 'A custom-made crown that completes and restores a dental implant.',
    metaDescription:
      'Implant crowns at Hazel Dell Dentistry in Carmel, IN — custom-made crowns that cap a dental implant and restore your tooth’s natural shape and function.',
    paragraphs: [
      'An implant crown serves many purposes and is usually recommended to restore significantly damaged or decayed teeth. Each crown is custom-made to fit your smile perfectly. The crown is placed over the damaged tooth to restore it to its natural appearance, shape, and size. Implant crowns can be made with three different materials: gold, porcelain, or porcelain fused to metal. Porcelain is a popular choice because our dentist can match it to your smile’s natural color. We will help determine which crown type will be best for your smile during your consultation.',
      'If you have teeth too damaged to be repaired by a dental filling, our dentist may recommend an implant crown. Crowns serve many purposes, such as:',
    ],
    bullets: [
      'Capping an implant to complete a dental implant restoration',
      'Correcting misshapen teeth',
      'Strengthening fractured or weak teeth',
      'Securing a large filling your tooth cannot support on its own',
      'Improving your smile overall and boosting your confidence',
    ],
    related: ['dental-crowns', 'dental-bridges', 'cbct'],
  },
  {
    slug: 'composite-dental-filling',
    name: 'Composite Dental Filling',
    shortDescription: 'Tooth-colored fillings that offer a natural-looking, mercury-free alternative to amalgam.',
    metaDescription:
      'Composite dental fillings at Hazel Dell Dentistry in Carmel, IN — tooth-colored, mercury-free fillings for a natural-looking, durable repair.',
    paragraphs: [
      'Our dentist and team are happy to use composite, or tooth-colored, dental fillings, as opposed to traditional silver amalgam fillings. Composite dental fillings offer a more natural-looking result and can help you achieve improved oral health. Some of the benefits of composite dental fillings are:',
    ],
    bullets: [
      'Support for your tooth’s structural integrity',
      'Reduced risk of future breaking or fracturing in the affected tooth',
      'Insulation from temperature changes caused by foods and beverages',
      'Increased resistance to decay and leaks, due to improved seals',
      'Flexibility to correct cavities that are too small for amalgam fillings to repair',
      'Easy filling repair and replacement without being removed from the tooth',
      'Safer dental fillings with no mercury or other metals used',
    ],
    related: ['dental-crowns', 'dental-cleanings-exams', 'digital-xrays'],
  },
  {
    slug: 'dental-bridges',
    name: 'Dental Bridges',
    shortDescription: 'A fixed restoration that replaces one or more missing teeth in a row.',
    metaDescription:
      'Dental bridges at Hazel Dell Dentistry in Carmel, IN — a fixed restoration that replaces missing teeth and restores your ability to speak and eat normally.',
    paragraphs: [
      'Our dentist may recommend a dental bridge for your smile if you are missing either a single tooth or multiple teeth in a row. This dental restoration is fixed in place with two dental crowns placed on the teeth or implants next to the open space, so the bridge cannot be removed and will not easily shift or come loose. The process of getting your custom-made crowns and bridge will normally take two visits with our dentist, and the dental bridge is designed to last for a long time, so you can have a healthy, complete smile for years to come.',
      'A visit with our dentist can help you determine if a dental bridge may be the best choice to complete your smile. The benefits of a dental bridge include:',
    ],
    bullets: [
      'Restored ability to speak, eat, and chew normally',
      'Less stress on the bite',
      'Improved shape and volume in the face',
      'No need for an unwanted removable partial denture',
      'Natural teeth kept from moving out of position',
      'Enhanced appearance of the smile',
    ],
    related: ['dental-crowns', 'implant-crowns', 'denture-partials'],
  },
  {
    slug: 'digital-xrays',
    name: 'Digital X-Rays',
    shortDescription: 'Faster, lower-radiation imaging that helps us diagnose accurately in real time.',
    metaDescription:
      'Digital X-rays at Hazel Dell Dentistry in Carmel, IN — faster, more comfortable imaging with significantly less radiation than traditional film X-rays.',
    paragraphs: [
      'Digital X-rays are one of the advanced diagnostic tools we use to provide you with the best possible care. Digital radiography has changed the way we take dental X-rays by making the process faster, more comfortable, and more convenient than ever before. Digital X-rays use a digital sensor to take images of your teeth, unlike traditional X-rays that use film. They also use significantly less radiation than conventional film X-rays and require no chemicals for developing images. Our dentist can then instantly view the high-quality images on monitors right in the treatment room to provide efficient, accurate diagnoses and care.',
      'Our team is able to use digital radiography to identify and diagnose several types of dental problems, such as:',
    ],
    bullets: [
      'Decay in between teeth',
      'Developmental abnormalities',
      'Improper tooth root positioning',
      'Cysts and abscesses',
      'Fractures in existing fillings',
      'Tumors',
      'Infection in the tooth nerves',
      'Bone loss',
    ],
    related: ['panoramic-xray', 'cbct', 'intraoral-camera'],
  },
  {
    slug: 'panoramic-xray',
    name: 'Panoramic X-Ray',
    shortDescription: 'A single, wide-view image of the full upper and lower dental arches.',
    metaDescription:
      'Panoramic X-rays at Hazel Dell Dentistry in Carmel, IN — a wide-view image of your full upper and lower arches that helps us diagnose a broad range of conditions.',
    paragraphs: [
      'In order to provide you with the best possible care, it is essential for our dentist to accurately evaluate and diagnose your oral health. One of the state-of-the-art tools we use to do that is panoramic X-rays. While standard bitewing X-rays provide us with a view of a few teeth and the supporting bone structure, panoramic X-rays allow us to view the full upper and lower dental arches — including all of the teeth, the upper and lower jawbones, and the surrounding facial structures. Using panoramic X-rays, our team can:',
    ],
    bullets: [
      'Assess the need for orthodontics and evaluate the progress of treatment',
      'Diagnose impacted wisdom teeth and other impacted teeth',
      'Analyze the development of periodontal disease',
      'Evaluate the TMJ (jaw joint) and diagnose a TMJ disorder',
      'Detect oral cancer',
      'Plan dental implant placement',
      'Diagnose cavities (tooth decay) and other dental problems',
      'Evaluate the extent of dental or facial trauma',
      'Detect abscesses, cysts, and tumors',
    ],
    related: ['digital-xrays', 'cbct', 'intraoral-camera'],
  },
  {
    slug: 'cbct',
    name: 'CBCT',
    shortDescription: 'Cone beam 3D imaging that helps Dr. Nikas diagnose with precision while limiting radiation.',
    metaDescription:
      'CBCT 3D imaging at Hazel Dell Dentistry in Carmel, IN — cone beam CT technology that provides precise digital images while minimizing radiation exposure.',
    paragraphs: [
      'Our 3D cone beam CT (CBCT) system gives our practice state-of-the-art technology to help Dr. Nikas diagnose potential issues more accurately and provide treatment with unprecedented confidence. Unlike a traditional spiral CT scanner, this system utilizes cone beam CT technology and provides precise, crystal-clear digital images while minimizing your exposure to radiation.',
      'Our 3D system enables us to perform a wider range of diagnoses and treatments in our office, helping to reduce multiple visits. It also allows us to choose the field of view or scanning area that best suits your specific treatment needs, which helps limit your radiation exposure because we are focusing specifically on your area of concern.',
    ],
    related: ['panoramic-xray', 'digital-xrays', 'implant-crowns'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));
}
