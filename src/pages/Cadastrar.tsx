import { Form } from "../styled/form";

export function Cadastrar() {
  return (
    <Form action="">
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
    </Form>
  );
}
