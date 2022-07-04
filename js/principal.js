var nome = document.querySelector("#nome");
var avisoNome = document.querySelector("#aviso-nome");
var email = document.querySelector("#email");
var avisoEmail = document.querySelector("#aviso-email");
var assunto = document.querySelector("#assunto");
var avisoAssunto = document.querySelector("#aviso-assunto");
var mensagem = document.querySelector("#mensagem");
var avisoMensagem = document.querySelector("#aviso-mensagem");
var botaoEnviar = document.querySelector(".enviar");

var campos = document.querySelector('.envelope-contato');

let inputs = [...campos.querySelectorAll('.input-dados')];

var ativar = false;



botaoEnviar.disabled = true;



function checarCampos()
{
  let isIncomplete = inputs.some(input => !input.value);
  enviar.disabled = isIncomplete;
  enviar.style.cursor = isIncomplete ? 'not-allowed' : 'pointer';
  enviar.classList.add("desabilitar");

  if (botaoEnviar.disabled != true)
  {
    enviar.classList.remove("desabilitar");
  }
};

function enviarFormulario()
{
   inputs.reset();
   return false;
}


nome.addEventListener("input", function()
{
  valor = this.value.length;

  if (valor > 0)
  {
    avisoNome.classList.add("esconder");
  }

  else
  {
    avisoNome.classList.remove("esconder");
  }
})

email.addEventListener("input", function()
{
  valor = this.value.length;

  if (valor > 0)
  {
    avisoEmail.classList.add("esconder");
  }

  else
  {
    avisoEmail.classList.remove("esconder");
  }
})

assunto.addEventListener("input", function()
{
  valor = this.value.length;

  if (valor > 0)
  {
    avisoAssunto.classList.add("esconder");
  }

  else
  {
    avisoAssunto.classList.remove("esconder");
  }
})

mensagem.addEventListener("input", function()
{
  valor = this.value.length;

  if (valor > 0)
  {
    avisoMensagem.classList.add("esconder");
  }

  else
  {
    avisoMensagem.classList.remove("esconder");
  }
})

campos.addEventListener("input", checarCampos);

checarCampos();

enviar.addEventListener("onclick", function()
{
  enviarFormulario();
})
