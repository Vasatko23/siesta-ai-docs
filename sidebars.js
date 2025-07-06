/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

const fs = require('fs');
const path = require('path');

// Funkce pro automatické generování sidebaru z markdown souborů
function generateSidebarItems() {
  const docsDir = path.join(__dirname, 'docs');
  const files = fs.readdirSync(docsDir);
  
  // Požadované pořadí stránek
  const desiredOrder = [
    'prihlaseni',
    'ovladaci-prvky', 
    'chat',
    'assistants',
    'conversations',
    'data',
    'feedback',
    'profile',
    'organization',
    'users',
    'roles',
    'zaver'
  ];
  
  // Získáme všechny markdown soubory
  const markdownFiles = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const nameWithoutExt = file.replace('.md', '');
      const cleanName = nameWithoutExt.replace(/^\d+-/, '');
      return cleanName;
    });
  
  // Seřadíme podle požadovaného pořadí
  const orderedItems = [];
  
  // Přidáme položky v požadovaném pořadí
  desiredOrder.forEach(item => {
    if (markdownFiles.includes(item)) {
      orderedItems.push(item);
    }
  });
  
  // Přidáme zbývající položky na konec
  markdownFiles.forEach(item => {
    if (!orderedItems.includes(item)) {
      orderedItems.push(item);
    }
  });
  
  return orderedItems;
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: generateSidebarItems(),
};

module.exports = sidebars;
