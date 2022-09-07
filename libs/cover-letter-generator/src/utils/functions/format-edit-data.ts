import { CoverLetterForm } from '../../components/cover-letter-form/form-data';
import { CoverLetterEdit } from '../../components/edit-form/form-data';
import { formatBodyData } from './format-body-data';

const formatPhoneNumber = (str: string) => {
  //Filter only numbers from the input
  const cleaned = ('' + str).replace(/\D/g, '');

  //Check if the input is of correct length
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `${match[1]}.${match[2]}.${match[2]}`;
    // '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }

  return str;
};

const formatHeader = (
  data: CoverLetterForm['Personal']
): CoverLetterEdit['Header'] => {
  if (data) {
    const { firstName, lastName, phone, email } = data;
    const name = `${firstName} ${lastName}`;

    const lines = [name, formatPhoneNumber(phone || ''), email];
    console.log(lines);

    return lines.map((d, idx) => {
      if (idx === 0) {
        return {
          text: d,
          style: 'Header',
        };
      }
      return {
        text: d,
        style: 'Emphasis',
      };
    });
  }
  return [];
};

const formatToSection = (
  data: CoverLetterForm['Company']
): CoverLetterEdit['To'] => {
  const res: CoverLetterEdit['To'] = [];
  if (data) {
    const { name, contact, address } = data;

    if (contact) {
      res.push({
        text: contact,
        style: 'Emphasis',
      });
    }
    [
      name,
      address?.street_address,
      [address?.city, address?.state].filter((t) => t).join(' '),
    ]
      .filter((t) => t)
      .forEach((l) => res.push({ text: l }));
  }

  return res;
};

export const formatEditData = (data: CoverLetterForm): CoverLetterEdit => {
  const { Personal, Company } = data;

  const res = {
    Header: formatHeader(Personal),
    To: formatToSection(Company),
    Body: formatBodyData(data),
  };
  console.log(res);
  return res;
};
