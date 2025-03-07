No TypeScript, você pode definir propriedades opcionais utilizando o **sinal de interrogação** (`?`). Isso significa que a propriedade pode ou não estar presente em um objeto.

### Exemplo de Propriedade Opcional:

```typescript
interface Pessoa {
  nome: string;
  idade?: number;  // A propriedade "idade" é opcional
}

const pessoa1: Pessoa = { nome: "João" };  // Propriedade "idade" não definida
const pessoa2: Pessoa = { nome: "Maria", idade: 30 };  // Propriedade "idade" definida
