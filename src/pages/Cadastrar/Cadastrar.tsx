import React from "react";
import "./Cadastrar.css";

function CadastrarForm() {
  return (
    <form action="">
      <fieldset>
        <legend>
          <h2>Empresas/Cadastrar Empresa</h2>
        </legend>

        <div className="field">
          <input name="cpf" />
        </div>

        <div className="field">
          <input name="Documento" />
        </div>
        <div className="field">
          <input name="nome" />
        </div>
        <div className="field">
          <input name="email" />
        </div>
        <div className="field">
          <input name="data_abertura" />
        </div>
      </fieldset>
    </form>
  );
}

export default CadastrarForm;
