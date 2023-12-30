const Bike = require('../models/bike.model');

const TEXT_FIELD_MIN_LENGTH = 5;

const validateRequiredFields = (fields) => {
  if (
    fields.some(
      (field) => field === undefined || field === null || field === '',
    )
  ) {
    return { error: 'All fields are required.' };
  }
  return null;
};

const validateNumberFields = (fields) => {
  if (fields.some((field) => typeof field !== 'number')) {
    return { error: 'All number fields should accept only the number.' };
  }
  return null;
};

const validateTextFieldsLength = (fields, minLength) => {
  if (fields.some((field) => field.length < minLength)) {
    return {
      error: `All text fields minimum length should be ${minLength} characters.`,
    };
  }
  return null;
};

exports.validateCreateBike = async ({
  ID,
  name,
  type,
  color,
  wheelSize,
  price,
  description,
}) => {
  const fieldsError = validateRequiredFields([
    ID,
    name,
    type,
    color,
    wheelSize,
    price,
  ]);
  if (fieldsError) return fieldsError;

  const numberFieldsError = validateNumberFields([ID, wheelSize, price]);
  if (numberFieldsError) return numberFieldsError;

  const textFieldsError = validateTextFieldsLength(
    [name, type, color, description],
    TEXT_FIELD_MIN_LENGTH,
  );
  if (textFieldsError) return textFieldsError;

  const existingBike = await Bike.findOne({ ID });
  if (existingBike) {
    return { error: `This bike ${ID} already exists.` };
  }

  return null;
};

exports.validateDeleteBike = async (ID) => {
  const existingBike = await Bike.findOne({ ID });

  if (!existingBike) {
    return { error: 'Bike not found.' };
  }

  return null;
};
