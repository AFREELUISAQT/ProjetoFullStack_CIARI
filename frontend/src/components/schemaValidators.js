import * as yup from "yup";

const schemaValidators = yup.object().shape({
  nomeMigrante: yup
    .string()
    .required("Por favor, preenche seu Nome!")
    .max(40, "O Nome precisa ter menos de 40 caracteres")
    .min(2, "O Nome precisa ter mais de 2 caracteres!"),
  sobrenomeMigrante: yup
    .string()
    .required("Por favor, preenche seu Sobrenome!")
    .max(40, "O Sobrenome precisa ter menos de 40 caracteres")
    .min(2, "O Sobrenome precisa ter mais de 2 caracteres!"),
  dataNascimento: yup
    .string()
    .required("Por favor, preenche sua Data de Nascimento!"),
  sexo: yup.string().nullable().required("Por favor, escolha uma Opção!"),
  emailMigrante: yup
    .string()
    .required("Por favor, preenche seu Email!")
    .email(
      "Por favor, preenche seu Email no formato válido! (Ex: michaelsimon@gmail.com)"
    ),
  telefone: yup
    .string()
    .required("Por favor, preenche seu número de Telefone!")
    .min(8, "O Telefone precisa ter mais de 8 dígitos!"),
  paisOrigem: yup
    .string()
    .required("Por favor, preenche seu País de Origem!")
    .max(40, "O País de Origem precisa ter menos de 40 caracteres!")
    .min(2, "O País de Origem precisa ter mais de 2 caracteres!"),
  cep: yup
    .string()
    .required(
      "Por favor, preenche o Cep de seu endereço atual no formato válido! (Ex: 88101280)"
    )
    .length(
      8,
      "O Cep precisa ter 8 dígitos Exatos segundo formato válido! (Ex: 88101280)"
    ),
  logradouro: yup
    .string()
    .required("Por favor, preenche a Rua de seu endereço atual!")
    .max(40, "A Rua precisa ter menos de 40 caracteres!")
    .min(2, "A Rua precisa ter mais de 2 caracteres!"),
  bairro: yup
    .string()
    .required("Por favor, preenche o Bairro de seu endereço atual!")
    .max(40, "O Bairro precisa ter menos de 40 caracteres!")
    .min(2, "O Bairro precisa ter mais de 2 caracteres!"),
  localidade: yup
    .string()
    .required("Por favor, preenche a Cidade de seu endereço atual!")
    .max(40, "A Cidade precisa ter menos de 40 caracteres!")
    .min(2, "A Cidade precisa ter mais de 2 caracteres!"),
  uf: yup
    .string()
    .required("Por favor, preenche o Estado de seu endereço atual!")
    .max(40, "O Estado precisa ter menos de 40 caracteres!")
    .min(2, "O Estado precisa ter mais de 2 caracteres!"),
  nivelInstrucao: yup.string().required("Por favor, escolha uma Opção!"),
  trabalho: yup.string().required("Por favor, escolha uma Opção!"),
});

export default schemaValidators;
