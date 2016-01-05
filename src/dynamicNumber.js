class DynamicNumber {

  constructor() {
    this._separator = '.';
    this._integer = 10;
    this._fraction = 10;
    this._regexp = this._buildRegexp();
  }

  set separator(sep) {
    this._separator = sep === '.' || sep === ',' ? sep : this._separator;
    this._regexp = this._buildRegexp();

  }

  set integer(part) {
    if(part >= 0){
      var _part = parseInt(part, 10);
      if(isNaN(_part) === false && isFinite(_part) && _part >= 0){
        this._integer = _part;
      }
    }
    this._regexp = this._buildRegexp();
  }

  set fraction(part) {
    if(part >= 0){
      var _part = parseInt(part, 10);
      if(isNaN(_part) === false && isFinite(_part) && _part >= 0){
        this._fraction = _part;
      }
    }
    this._regexp = this._buildRegexp();
  }

  calculate(rawViewValue = 0, oldModelValue = 0, oldViewValue = 0) {
    this._rawViewValue = rawViewValue;
    this._oldModelValue = oldModelValue;
    this._oldViewValue = oldViewValue;
    this._newModelValue = 0;
    this._newViewValue = '';

    var value = String(this._rawViewValue);
    value = this._removeLeadingZero(value);
    if(value === '' && String(this._rawViewValue).charAt(0)=== '0'){
      this._newModelValue = 0;
      this._newViewValue = '0';
      return 0;
    }
    if(value === undefined || value === ''){
      this._newModelValue = 0;
      this._newViewValue = '';
      return;
    }
    if(value === '-'){
      this._newModelValue = 0;
      this._newViewValue = '-';
      return;
    }
    //test fails, therefore we use old values
    if(this._regexp.test(value) === false){
      this._newModelValue = this._oldModelValue;
      this._newViewValue = this._oldViewValue;
      return;
    }
     // view value success 'correct view format' test
    else {
      this._newModelValue = this._createModelValue(value);
      this._newViewValue = value;
      return;
    }
  }

  get modelValue() {
    return this._newModelValue;
  }

  get viewValue() {
    return this._newViewValue;
  }

  _buildRegexp() {
    var negativeRegex = '-?';

    var intRegex = '[0-9]{0,'+(this._integer)+'}';
    if(this._integer === 0){
      intRegex = '0';
    }
    var fractRegex = '(\\'+this._separator+'([0-9]){0,'+this._fraction+'})';
    if(this._fraction === 0) {
      fractRegex = '';
    }
    return new RegExp('^'+negativeRegex+intRegex+fractRegex+'?$');
  }

  _removeLeadingZero(value) {
    return value
      .replace(/^0+/g, "")//change 00000 to ''
      .replace(/^-0(\d+)/g, "-$1")//change -013212 to -0
      .replace(/^-([\.,])/, "-0$1")//change -. to -0.
      .replace(/^[\.,]/g, "0$&");//change . to 0.
  }

  _createModelValue(value) {
    if(this._separator === ',') {
      return parseFloat(value.replace(/\./g,"").replace(",","."));
    } else {
      return parseFloat(value.replace(/,/g,""));
    }
  }
}

export default DynamicNumber;
