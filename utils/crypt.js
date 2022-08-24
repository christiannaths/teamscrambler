import { customAlphabet } from 'nanoid/non-secure';

const NUMERIC = '1234567890';
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwzyz';

const alphaNumeric = customAlphabet(ALPHA + NUMERIC, 7);
const numeric = customAlphabet(NUMERIC, 3);

function shortId() {
  return alphaNumeric() + numeric();
}

export { shortId };
