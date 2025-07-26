import type { Schema, Struct } from '@strapi/strapi';

export interface AgreementsAgreementConfirmation
  extends Struct.ComponentSchema {
  collectionName: 'components_agreements_agreement_confirmations';
  info: {
    displayName: 'Agreement Confirmation';
  };
  attributes: {
    application_certification: Schema.Attribute.Boolean;
    nda_confidentiality: Schema.Attribute.Boolean;
    nda_exposure: Schema.Attribute.Boolean;
    nda_good_faith: Schema.Attribute.Boolean;
    nda_noncompete: Schema.Attribute.Boolean;
  };
}

export interface AvailabilityDayAvailability extends Struct.ComponentSchema {
  collectionName: 'components_availability_day_availabilities';
  info: {
    displayName: 'Day Availability';
  };
  attributes: {
    afternoon: Schema.Attribute.Boolean;
    day: Schema.Attribute.Enumeration<
      [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ]
    >;
    evening: Schema.Attribute.Boolean;
    morning: Schema.Attribute.Boolean;
    none: Schema.Attribute.Boolean;
  };
}

export interface ExperienceWorkExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_work_experiences';
  info: {
    displayName: 'Work Experience';
  };
  attributes: {
    laundryProcess: Schema.Attribute.Text;
    orderOrganization: Schema.Attribute.Text;
    previousWorkExperience: Schema.Attribute.Text;
    priorExperiencePreparation: Schema.Attribute.Text;
    vehicleInfo: Schema.Attribute.Text;
    washerDryerInfo: Schema.Attribute.Text;
  };
}

export interface PersonalInfoPersonalInformation
  extends Struct.ComponentSchema {
  collectionName: 'components_personal_info_personal_informations';
  info: {
    displayName: 'Personal Information';
  };
  attributes: {
    address_line_1: Schema.Attribute.String;
    address_line_2: Schema.Attribute.String;
    city: Schema.Attribute.String;
    dob: Schema.Attribute.Date;
    fullName: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
    postal_code: Schema.Attribute.String;
    state: Schema.Attribute.String;
  };
}

export interface QualificationsQualifications extends Struct.ComponentSchema {
  collectionName: 'components_qualifications_qualifications';
  info: {
    displayName: 'Qualifications';
  };
  attributes: {
    can_iron_airdry: Schema.Attribute.Boolean;
    can_lift_40lbs: Schema.Attribute.Boolean;
    can_pickup: Schema.Attribute.Boolean;
    felony_conviction: Schema.Attribute.Boolean;
    has_license: Schema.Attribute.Boolean;
    has_smartphone: Schema.Attribute.Boolean;
    has_washer_dryer: Schema.Attribute.Boolean;
    no_smoke: Schema.Attribute.Boolean;
    understands_labels: Schema.Attribute.Boolean;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'agreements.agreement-confirmation': AgreementsAgreementConfirmation;
      'availability.day-availability': AvailabilityDayAvailability;
      'experience.work-experience': ExperienceWorkExperience;
      'personal-info.personal-information': PersonalInfoPersonalInformation;
      'qualifications.qualifications': QualificationsQualifications;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
