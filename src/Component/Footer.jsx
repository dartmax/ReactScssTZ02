import React from "react";
import '../main.scss'

class Button extends React.Component {
  render() {
    return (
      <fieldset>
        <button
          className="button-wrapper"
          type={this.props.type || 'button'}
          value={this.props.value || null}
        >
          {this.props.text}
        </button>
      </fieldset>
    );
  }
}

class Datalist extends React.Component {
  render() {
    const dataOptions = this.props.options.split(', ');

    const dataOptionsList = dataOptions.map((dataOption, index) => {
      return <option key={index} value={dataOption}/>
    });

    return (
      <fieldset>
        <input list={this.props.htmlFor}/>

        <datalist
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>Select one option</option>

          {dataOptionsList}
        </datalist>
      </fieldset>
    );
  }
}


const onChangeYearFrom = (e) => {
  console.log("change", e.target.value)
}

const onKeyUpYearFrom = (e) => {
  console.log("keyUp", e.target.value)
}


class Input extends React.Component {
  render() {
    return (
      <fieldset>
      <input
        type='number'
        placeholder={this.props.placeholder}
        min={1000}
        max={9999}
        onChange={onChangeYearFrom}
        onKeyUp={onKeyUpYearFrom}
      />
      </fieldset>
    );
  }
}

class Radio extends React.Component {
  render() {
    return (
      <fieldset>
          <input
            id={this.props.htmlFor}
            name={this.props.name || null}
            required={this.props.required || null}
            type='radio'
          />
          {this.props.label}
      </fieldset>
    );
  }
}

class Select extends React.Component {
  render() {
    const selectOptions = this.props.options.split(', ');

    const selectOptionsList = selectOptions.map((selectOption, index) => {
      return <option key={index} value={index}>{selectOption}</option>
    });

    return (
      <fieldset>
        <select
          defaultValue=''
          id={this.props.selectors}
          placeholder={this.props.placeholder}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          {selectOptionsList}
        </select>
      </fieldset>
    );
  }
}

class Textarea extends React.Component {
  render() {
    return (
      <fieldset>
        <textarea
          cols={this.props.cols || null}
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
          rows={this.props.rows || null}
        >
        </textarea>
      </fieldset>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div className="container-wrapper">
              <div className="action-wrapper">
              </div>

              <div className="input-wrapper">
                <form action="" className="form">
                  <div className="title-wrapper"><h1>Contact info</h1></div>
                  <div className='text-contact-container'>
                    <p>
                      We appreciate your interest in our inventory, and apologoze we do not have model details display on the website at ths time.
                    </p>
                    <br/>
                    <p>
                      Please fill the form out below and our team will quickly respond, or, please call us at 765-470-4091 for more information.
                    </p>
                  </div>
                  <input
                    className="form-field"
                    type="text"
                    placeholder="First name*"
                    required
                  />
                  <input
                    className="form-field"
                    type="text"
                    placeholder="Last name*"
                    required
                  />
                  <input
                    className="gform-field"
                    type="text"
                    placeholder="Email*"
                    required
                  />
                  <input
                    className="form-field"
                    type="text"
                    placeholder="Phone"
                    required
                  />
                  <div className="radio-wrapper">
                    <Radio
                      hasLabel='true'
                      htmlFor='radioOne'
                      label='Prefer e-mail'
                      name='radios'
                      required='true'
                    />
                    <Radio
                      htmlFor='radioTwo'
                      label='Prefer phone'
                      name='radios'
                      required='true'
                    />
                  </div>
                    <button
                      className="button-wrapper"
                      type={'submit' || 'button'}>Contact Us</button>
                </form>
              </div>


            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="text-title">
            <p>
              Can't find what you looking for?
            </p>
          </div>
          <form method='' action='' >
            <Select
              selectors='select'
              placeholder='Any type (New and Pre-owned)'
              options='Any type (New and Pre-owned), two, three, option four, five'
              required='true'
            />
            <div className='year-wrapper text-white'>
              <Input
                htmlFor='emailInput'
                placeholder='From 1999*'
                required='true'
              />
              <p className='text-title-between'>–</p>
              <Input
                htmlFor='emailInput'
                placeholder='to 2019*'
                required='true'
              />
            </div>
            <Select
              selectors='select'
              placeholder='Audi'
              options='Audi, Nissan, Volksvagen, Mitsubishi'
              required='true'
            />
            <Select
              selectors='select'
              placeholder='Q3'
              options='Q3, Q5, Q7'
              required='true'
            />
            <Input
              selectors='select'
              placeholder='Price (Max)'
              required='true'
            />
            <Select
              selectors='select'
              options='Trim, Yes, No'
              required='true'
            />
            <Select
              selectors='select'
              options='Color, Red, Blue, White, Black'
              required='true'
            />
            <Textarea
              placeholder="Your message"
              selectors='textarea'
              required='true'
            />
            <div className='text-contact-container'>
              <p>
                By submitting this form, you agree to be contacted with information regarding the vehicle you are searching for.
              </p>
            </div>
            <Button
              type='submit'
              value='submit'
              text='Let us find it'
            />

          </form>
        </div>
      </div>
    )
  }
}

export default Form;