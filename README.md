Portal de autenticação personalizado para acesso à rede Wi-Fi da **Jotanunes Construtora**, utilizando o sistema de hotspot integrado ao firewall **Sophos XGS 2100**.

## 📸 Captura de Tela

![Hotspot Page]![image](https://github.com/user-attachments/assets/706052ff-04e9-4ce3-9801-68d6c82d662e)

## 🎯 Objetivo

Esta página tem como objetivo oferecer uma interface amigável e compatível com os requisitos da **LGPD**, garantindo:

- Consentimento explícito para uso da rede.
- Registro dos acessos.
- Temporização da sessão.
- Feedback visual ao usuário já autenticado.

## ✅ Funcionalidades

- Carrossel de imagens institucionais.
- Formulário com checkbox de aceite dos termos.
- Botão de **"Aceitar e Conectar"**.
- Bloco de confirmação para usuários já autenticados.
- Informações de contato e endereço da empresa no rodapé.
- Totalmente responsiva e compatível com o portal-captive do **Sophos Firewall**.

## 🧰 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (carrossel e contadores)
- Bootstrap (opcional, se estiver usando)

## ⚙️ Estrutura Esperada pelo Sophos

A página deve conter um formulário com os seguintes elementos:

- **Campo oculto `username`**
- **Campo oculto ou visível `password` (pode estar vazio)**
- **Ação configurada para o endpoint de autenticação do Sophos**
- Elementos visuais devem estar dentro de `<form>` para que o botão funcione corretamente.

## 🚀 Como Usar

1. Clone ou baixe o repositório:

   ```bash
   git clone https://github.com/daniiel-fernando/Hotspot-Page-Jotaanunes.git
