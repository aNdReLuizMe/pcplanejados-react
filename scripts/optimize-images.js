// scripts/optimize-images.js
import fs from 'fs';
import path, { dirname } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Obter o diretório atual em ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuração de caminhos
const baseInputDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../src/assets/images/optimized');

// Configurações de otimização
const optimizationConfig = {
    jpeg: {
        quality: 80,
        progressive: true,
        mozjpeg: true,
    },
    webp: {
        quality: 75,
        lossless: false,
    },
    avif: {
        quality: 65,
        lossless: false,
    }
};

// Garantir que o diretório de saída existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Função para processar uma única imagem
async function optimizeImage(inputPath, filename) {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Redimensionar se necessário (mantendo aspecto)
        if (metadata.width > 1920) {
            image.resize(1920, null, {
                withoutEnlargement: true,
                fit: 'inside'
            });
        }

        // Gerar todas as versões
        await Promise.all([
            // JPEG otimizado
            image
                .clone()
                .jpeg(optimizationConfig.jpeg)
                .toFile(path.join(outputDir, `${filename}.jpg`)),

            // WebP
            image
                .clone()
                .webp(optimizationConfig.webp)
                .toFile(path.join(outputDir, `${filename}.webp`)),

            // AVIF
            image
                .clone()
                .avif(optimizationConfig.avif)
                .toFile(path.join(outputDir, `${filename}.avif`))
        ]);

        console.log(`✓ Otimizado: ${filename}`);
    } catch (error) {
        console.error(`✕ Erro ao otimizar ${filename}:`, error);
    }
}

// Função recursiva para percorrer diretórios
async function processDirectory(directory) {
    try {
        const entries = fs.readdirSync(directory, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(directory, entry.name);

            // Pular a pasta 'optimized'
            if (entry.name === 'optimized') continue;

            if (entry.isDirectory()) {
                // Se for diretório, processa recursivamente
                await processDirectory(fullPath);
            } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
                // Se for arquivo de imagem, otimiza
                const filename = `${path.relative(baseInputDir, directory).replace(/\//g, '-')}-${path.parse(entry.name).name}`;
                await optimizeImage(fullPath, filename);
            }
        }
    } catch (error) {
        console.error(`Erro ao processar diretório ${directory}:`, error);
    }
}

// Iniciar o processamento
console.log('Iniciando otimização de imagens...');
console.log(`Diretório base: ${baseInputDir}`);
console.log(`Diretório de saída: ${outputDir}`);

processDirectory(baseInputDir)
    .then(() => {
        console.log('\nProcessamento concluído!');
        console.log('As imagens otimizadas estão em: src/assets/images/optimized');
    })
    .catch(error => {
        console.error('Erro durante o processamento:', error);
    });
