# Netflix Clone

Este es un clon del sitio de **Netflix**, construido con **Next.js**, usando **TypeScript**, **Tailwind CSS**, y otras herramientas modernas.  
El objetivo es practicar desarrollo **frontend** y **backend**, consumo de APIs, diseño responsivo, manejo de estado, etc.

---

## 🛠 Tecnologías usadas

- **Next.js** — framework React para aplicaciones fullstack.  
- **TypeScript** — para mayor seguridad de tipos.  
- **Tailwind CSS** — para estilos rápidos y diseño responsivo.  
- **ESLint** — para asegurar calidad de código.  
- **PostCSS / Autoprefixer** — procesamiento y compatibilidad de CSS.  
- **Prisma** — ORM para conectarse a PostgreSQL.  
- **PostgreSQL** — base de datos relacional.  
- (Otras que uses: autenticación, fetch de datos, SSR/SSG, etc.)

---

## ⚙️ Estructura del proyecto

| Carpeta / Archivo     | Contenido |
|----------------------|-----------|
| `app/`               | Código de páginas y componentes de Next.js (rutas, layouts, etc.) |
| `components/ui/`     | Componentes reutilizables de interfaz (cabecera, tarjetas de contenido, barra de navegación, etc.) |
| `lib/`               | Funciones de utilidad / lógica de negocio / llamadas a API |
| `prisma/`            | Esquema de Prisma y migraciones de la base de datos |
| `public/`            | Recursos estáticos: imágenes, íconos, fuentes, etc. |
| `package.json`       | Dependencias y scripts disponibles |
| `tailwind.config.ts` | Configuración de Tailwind CSS |
| `next.config.ts`     | Configuración de Next.js |
| Otros archivos de configuración | ESLint, PostCSS, tsconfig, .env, etc. |

---

## 🔑 Variables de entorno

Este proyecto utiliza **Prisma** y **PostgreSQL**, por lo que necesitas configurar algunas variables de entorno.

1. Entra al directorio del proyecto:

   ```bash
   cd netflix
   ```

2. Crea un archivo `.env` en la raíz del proyecto:

   ```bash
   env
   # URL de conexión a PostgreSQL
   DATABASE_URL="postgresql://usuario:password@localhost:5432/mi_base_de_datos?schema=public"
   
   # Puerto del servidor (opcional, por defecto 3000)
   PORT=3000
   
   # Clave secreta para JWT o autenticación
   AUTH_SECRET="tu_clave_super_secreta"
   
   # API keys o URLs de servicios externos (si aplica)
   MOVIES_API_KEY="tu_api_key_aqui"ps://github.com/PPOSM1993/netflix.git
   ```


3. Prisma (schema.prisma) debe apuntar a la variable de entorno DATABASE_URL:

   ```bash
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   
   generator client {
     provider = "prisma-client-js"
   }
   ```

3. Inicializa tu base de datos y genera el cliente de Prisma:
   
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

4. Instala las dependencias:

   ```bash
   npm install
   ```

5. Puedes acceder a las variables en tu código:
   
   ```bash
   const dbUrl = process.env.DATABASE_URL;
   console.log("Conectando a la base de datos:", dbUrl);
   ```

5. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

6. Abre la aplicación en tu navegador:
    ```bash
      http://localhost:3000
      ```

## 📦 Scripts disponibles

En package.json hay varios scripts útiles, como:

| Comando | Qué hace                                                               |
| ------- | ---------------------------------------------------------------------- |
| `dev`   | Inicia el servidor en modo desarrollo.                                 |
| `build` | Genera una versión lista para producción.                              |
| `start` | Sirve la versión de producción.                                        |
| `lint`  | Analiza el código para detectar problemas de estilo / errores comunes. |


## 📐 Características

Estas son algunas de las cosas que el clon incluye / podría incluir (adaptar según lo que hayas hecho):

- Diseño responsivo — se ve bien en móviles, tablets y desktop.
- Pantalla de inicio con carruseles de contenido.
- Páginas de detalle para películas / series.
- Búsqueda de contenido. 
- Autenticación básica (login/signup) (si lo hiciste).
- Estado de carga, manejo de errores al cargar datos.
- Optimización de imágenes, lazy loading, etc.

## 🔮 Mejoras / Futuras funcionalidades

Si quieres seguir expandiéndolo, algunas ideas:

- Autenticación real con backend / base de datos.
- Gestión de usuarios (listas de favoritos, historial, etc.).
- Streaming de video (mock o real).
- Traducciones / multilanguage.
- Mejora del SEO, metadatos dinámicos.
- Tests (unitarios / de integración).
- Despliegue automático (por ejemplo en Vercel).

## 📂 Cómo contribuir

Si alguien más quiere colaborar, sugerencias:

1. Haz un fork del repositorio
2. Crea una rama nueva con la funcionalidad o corrección que quieras implementar:

```bash
git checkout -b mi-nueva-funcionalidad
```

3. Haz tus cambios, prueba bien.
4. Abre un pull request describiendo lo que haces.

## 📄 Licencia

Este proyecto está bajo la licencia MIT (o la que quieras usar).
Puedes usarlo con fines educativos, personales, etc., pero si lo distribuyes o lo haces público, dame crédito.

## ⚠️ Notas importantes

- Algunos assets / APIs pueden estar simulados (mock), no ser datos reales de Netflix.
- Verifica las variables de entorno si usas alguna (por ejemplo, para la API de películas, claves de servicio, etc.).
- Puede que haya dependencias que requieran versiones específicas de Node.js / npm / yarn / pnpm; revisa package.json para   ver requerimientos.

## ℹ️ Contacto

Si tienes dudas, sugerencias o quieres charlar del proyecto, puedes contactarme en:
PPOSM1993 — GitHub

