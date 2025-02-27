# Autenticator

Projeto Django básico criado para testes de QA.

## 🚀 Configuração do ambiente

Siga os passos abaixo para rodar o projeto localmente.

### 📌 Clonar o repositório

```bash
git clone git@github.com:danellaclaudioluiz/autenticator.git
cd autenticator
```

### 🐍 Criar e ativar ambiente virtual

```bash
python -m venv venv
source venv/bin/activate  # Para Linux/Mac
venv\Scripts\activate     # Para Windows
```

### 📦 Instalar dependências

```bash
pip install -r requirements.txt
```

### 🔄 Aplicar migrações

```bash
python manage.py migrate
```

### 🚀 Rodar o servidor

```bash
python manage.py runserver
```

Agora o projeto estará rodando em `http://127.0.0.1:8000/` 🎉

---

## Como Rodar os Testes em Cypress

### Pré-requisitos

- Node.js - Você encontra em: https://nodejs.org/en/ 
- Git: Você encontra em: https://git-scm.com/downloads

### Navegue até o diretório do projeto
```
cd autenticator-testes-automatizados
```
### Instale as dependências:
```
npm init -y
```
```
npm install Cypress
```

### Execute os testes:
```
npm test
```