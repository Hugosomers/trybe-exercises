import React, { Component } from 'react'

export default class PersonalField extends Component {
  render() {
    const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SE','SP','TO'];
    const { value, handler, upperCaseFunc, specialCharsRem, verirfyFirstChar, validateEmail } = this.props
    return (
      <fieldset>
        <legend>Informações pessoais</legend>

        <p>Nome:</p>
        <label>
          <input name="nome" type="text" maxLength="40" required onChange={handler} value={value.nome} onKeyPress={upperCaseFunc} />
        </label>

        <p>E-mail:</p>
        <label>
          <input name="email" type="text" maxLength="50" required onChange={handler} onBlur={validateEmail} value={value.email} />
        </label>

        <p>CPF:</p>
        <label>
          <input name="cpf" type="text" maxLength="11" required onChange={handler} value={value.cpf} />
        </label>

        <p>Endereço:</p>
        <label>
          <input name="address" type="text" maxLength="200" value={value.address} required onChange={handler} onKeyUp={specialCharsRem} />
        </label>

        <p>Cidade:</p>
        <label>
          <input name="city" type="text" maxLength="28" required value={value.city} onChange={handler} onBlur={verirfyFirstChar}/>
        </label>

        <p>Estado:</p>
        <label>
          <select required name="estado" onChange={handler}>
            <option>Selecione seu estado</option>
            {estados.map((estado) => <option key={estado} value={estado}>{estado}</option>)}
          </select>
        </label>

        <p>Casa: </p>
        <label htmlFor="Casa">
          <input type="radio" id="Casa" name="home" value='Casa' onChange={handler} required/>Casa
        </label>

        <label htmlFor="Apartamento">
          <input type="radio" id="Apartamento" name="home" value='Apartamento' onChange={handler} required/>Apartamento
        </label>

      </fieldset>
    )
  }
}
