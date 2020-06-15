import { CardHolder } from './card.holder';

export class Card {
  card_number: string;
  security_code: string;
  expiration_month: string;
  expiration_year: string;
  cardholder: CardHolder;
}
