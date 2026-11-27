// Multi-Plan Library and Initialization
let currentPlanId = localStorage.getItem('bibliaCurrentPlan') || 'icppg_2026';
let currentLang = localStorage.getItem('bibliaLang') || 'pt';

// Translation Data
const translations = {
    'pt': {
        // UI
        'subtitle': 'Quiet Time Now',
        'tagline': 'Seu progresso de leitura bíblica em um só lugar',
        'choose_plan': 'Escolha seu plano de leitura',
        'plan_icppg_2026': 'Plano ICPPG 2026', 'plan_icppg_2026_desc': 'Plano oficial da igreja',
        'plan_kids_jovens': 'Plano Kids/Jovens', 'plan_kids_jovens_desc': 'Histórias de Jesus (Leitura Curta)',
        'plan_proverbios_31': 'Provérbios em 31 dias', 'plan_proverbios_31_desc': '1 capítulo por dia',
        'plan_canonical': 'Gênesis ao Apocalipse', 'plan_canonical_desc': 'Ordem tradicional (365 dias)',
        'plan_chronological': 'Ordem Cronológica', 'plan_chronological_desc': 'Ordem dos acontecimentos',
        'plan_maratona_180': 'Maratona 180 Dias', 'plan_maratona_180_desc': 'Bíblia completa (ritmo moderado)',
        'plan_maratona_120': 'Maratona 120 Dias', 'plan_maratona_120_desc': 'Intensivo (Bíblia toda em 4 meses)',
        'plan_new_testament': 'Novo Testamento', 'plan_new_testament_desc': '27 livros em 3 meses',
        'plan_old_testament': 'Antigo Testamento', 'plan_old_testament_desc': '39 livros em 6 meses',
        'suggest_plan': 'Sugira o seu plano', 'suggest_plan_desc': 'Envie o plano da sua igreja',
        'warning_title': 'Aviso Importante',
        'warning_text': 'No navegador comum, limpar o histórico apaga suas marcações. Já no App para celular (recomendamos instalar pelo Google Chrome), o seu progresso é salvo automaticamente!',
        'btn_backup': '📥 Salvar seu progresso', 'btn_restore': '📤 Restaurar seu progresso',
        'backup_success': '✅ Backup exportado com sucesso!',
        'backup_invalid': '❌ Arquivo de backup inválido!',
        'restore_confirm': '⚠️ Isso vai substituir seu progresso atual. Deseja continuar?',
        'restore_success': '✅ Backup restaurado com sucesso!',
        'restore_error': '❌ Erro ao ler o arquivo de backup!',
        'todays_reading': 'Leitura de Hoje',
        'total_progress': 'Progresso Total',
        'of': 'de', 'days': 'dias', 'chapters': 'capítulos', 'label_books': 'livros',
        'this_month': 'Este Mês', 'bible': 'BÍBLIA',
        'browse_by_month': 'Navegue por Mês',
        'back_to_top': 'Voltar', 'go_to_end': 'Final',
        'congrats_title': 'Parabéns!',
        'verse_text': '"Deleita-te também no Senhor, e Ele te concederá o que deseja o teu coração."',
        'verse_ref': 'Salmos 37:4 (ARC)',
        'amen': 'Amém!',
        // Dynamic
        'month_names': ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        'month_prefix': 'Mês',
        'day_prefix': 'Dia',
        'proverbs': 'Provérbios',
        'read_btn': 'Marcar', 'read_done': '✓ Lido',
        'mark_all': '✓ Marcar tudo', 'unmark_all': '✗ Desmarcar tudo',
        'loading': 'Carregando...',
        'no_reading': 'Sem leitura programada',
        'completed_ribbon': 'COMPLETO',
        'congrats_month': 'Você completou todas as leituras do mês!',
        // Books (Default PT)
        'books': {
            "Gênesis": "Gênesis",
            "Êxodo": "Êxodo",
            "Levítico": "Levítico",
            "Números": "Números",
            "Deuteronômio": "Deuteronômio",
            "Josué": "Josué",
            "Juízes": "Juízes",
            "Rute": "Rute",
            "1Samuel": "1 Samuel",
            "2Samuel": "2 Samuel",
            "1Reis": "1 Reis",
            "2Reis": "2 Reis",
            "1Crônicas": "1 Crônicas",
            "2Crônicas": "2 Crônicas",
            "Esdras": "Esdras",
            "Neemias": "Neemias",
            "Ester": "Ester",
            "Jó": "Jó",
            "Salmos": "Salmos",
            "Provérbios": "Provérbios",
            "Eclesiastes": "Eclesiastes",
            "Cantares": "Cantares",
            "Isaías": "Isaías",
            "Jeremias": "Jeremias",
            "Lamentações": "Lamentações",
            "Ezequiel": "Ezequiel",
            "Daniel": "Daniel",
            "Oseias": "Oseias",
            "Joel": "Joel",
            "Amós": "Amós",
            "Obadias": "Obadias",
            "Jonas": "Jonas",
            "Miqueias": "Miqueias",
            "Naum": "Naum",
            "Habacuque": "Habacuque",
            "Sofonias": "Sofonias",
            "Ageu": "Ageu",
            "Zacarias": "Zacarias",
            "Malaquias": "Malaquias",
            "Mateus": "Mateus",
            "Marcos": "Marcos",
            "Lucas": "Lucas",
            "João": "João",
            "Atos": "Atos",
            "Romanos": "Romanos",
            "1Coríntios": "1 Coríntios",
            "2Coríntios": "2 Coríntios",
            "Gálatas": "Gálatas",
            "Efésios": "Efésios",
            "Filipenses": "Filipenses",
            "Colossenses": "Colossenses",
            "1Tessalonicenses": "1 Tessalonicenses",
            "2Tessalonicenses": "2 Tessalonicenses",
            "1Timóteo": "1 Timóteo",
            "2Timóteo": "2 Timóteo",
            "Tito": "Tito",
            "Filemom": "Filemom",
            "Hebreus": "Hebreus",
            "Tiago": "Tiago",
            "1Pedro": "1 Pedro",
            "2Pedro": "2 Pedro",
            "1João": "1 João",
            "2João": "2 João",
            "3João": "3 João",
            "Judas": "Judas",
            "Apocalipse": "Apocalipse"
        },
        'plan_started': 'Plano iniciado dia:',
        'plan_ends': 'Previsão para o término:',
        'plan_not_started': 'Você ainda não iniciou este plano.',
        'plan_not_started_desc': 'Clique no botão abaixo para começar sua jornada de leitura!',
        'start_plan_btn': '📖 Iniciar Plano Hoje',
        'late_flexible_msg': 'Você tem leituras pendentes neste plano.',
        'late_flexible_btn': 'Retomar de onde parou'
    },
    'en': {
        'subtitle': 'Quiet Time Now', 'tagline': 'Your Bible reading progress in one place',
        'choose_plan': 'Choose your reading plan',
        'plan_icppg_2026': 'ICPPG 2026 Plan', 'plan_icppg_2026_desc': 'Official church plan',
        'plan_kids_jovens': 'Kids/Youth Plan', 'plan_kids_jovens_desc': 'Stories of Jesus (Short Reading)',
        'plan_proverbios_31': 'Proverbs in 31 days', 'plan_proverbios_31_desc': '1 chapter per day',
        'plan_canonical': 'Genesis to Revelation', 'plan_canonical_desc': 'Traditional order (365 days)',
        'plan_chronological': 'Chronological Order', 'plan_chronological_desc': 'Historical event order',
        'plan_maratona_180': '180-Day Marathon', 'plan_maratona_180_desc': 'Complete Bible (Moderate pace)',
        'plan_maratona_120': '120-Day Marathon', 'plan_maratona_120_desc': 'Intensive (Whole Bible in 4 months)',
        'plan_new_testament': 'New Testament', 'plan_new_testament_desc': '27 books in 3 months',
        'plan_old_testament': 'Old Testament', 'plan_old_testament_desc': '39 books in 6 months',
        'suggest_plan': 'Suggest your plan', 'suggest_plan_desc': 'Send us your church plan',
        'warning_title': 'Important Warning',
        'warning_text': 'In a regular browser, clearing history erases your checkmarks. In the mobile App (recommended to install via Google Chrome), your progress is saved automatically!',
        'btn_backup': '📥 Save progress', 'btn_restore': '📤 Restore progress',
        'backup_success': '✅ Backup exported successfully!',
        'backup_invalid': '❌ Invalid backup file!',
        'restore_confirm': '⚠️ This will overwrite your current progress. Do you want to continue?',
        'restore_success': '✅ Backup restored successfully!',
        'restore_error': '❌ Error reading backup file!',
        'todays_reading': "Today's Reading", 'total_progress': 'Total Progress',
        'of': 'of', 'days': 'days', 'chapters': 'chapters', 'label_books': 'books',
        'this_month': 'This Month', 'bible': 'BIBLE',
        'browse_by_month': 'Browse by Month',
        'back_to_top': 'Top', 'go_to_end': 'End',
        'congrats_title': 'Congratulations!',
        'verse_text': '"Delight yourself also in the Lord, and He shall give you the desires of your heart."',
        'verse_ref': 'Psalm 37:4 (NKJV)',
        'amen': 'Amen!',
        'month_names': ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        'month_prefix': 'Month', 'day_prefix': 'Day',
        'proverbs': 'Proverbs',
        'read_btn': 'Mark', 'read_done': '✓ Done',
        'mark_all': '✓ Mark all', 'unmark_all': '✗ Unmark all',
        'loading': 'Loading...', 'no_reading': 'No reading scheduled',
        'completed_ribbon': 'COMPLETE',
        'congrats_month': 'You completed all readings for the month!',
        'books': {
            "Gênesis": "Genesis",
            "Êxodo": "Exodus",
            "Levítico": "Leviticus",
            "Números": "Numbers",
            "Deuteronômio": "Deuteronomy",
            "Josué": "Joshua",
            "Juízes": "Judges",
            "Rute": "Ruth",
            "1Samuel": "1 Samuel",
            "2Samuel": "2 Samuel",
            "1Reis": "1 Kings",
            "2Reis": "2 Kings",
            "1Crônicas": "1 Chronicles",
            "2Crônicas": "2 Chronicles",
            "Esdras": "Ezra",
            "Neemias": "Nehemiah",
            "Ester": "Esther",
            "Jó": "Job",
            "Salmos": "Psalms",
            "Provérbios": "Proverbs",
            "Eclesiastes": "Ecclesiastes",
            "Cantares": "Song of Solomon",
            "Isaías": "Isaiah",
            "Jeremias": "Jeremiah",
            "Lamentações": "Lamentations",
            "Ezequiel": "Ezekiel",
            "Daniel": "Daniel",
            "Oseias": "Hosea",
            "Joel": "Joel",
            "Amós": "Amos",
            "Obadias": "Obadiah",
            "Jonas": "Jonah",
            "Miqueias": "Micah",
            "Naum": "Nahum",
            "Habacuque": "Habakkuk",
            "Sofonias": "Zephaniah",
            "Ageu": "Haggai",
            "Zacarias": "Zechariah",
            "Malaquias": "Malachi",
            "Mateus": "Matthew",
            "Marcos": "Mark",
            "Lucas": "Luke",
            "João": "John",
            "Atos": "Acts",
            "Romanos": "Romans",
            "1Coríntios": "1 Corinthians",
            "2Coríntios": "2 Corinthians",
            "Gálatas": "Galatians",
            "Efésios": "Ephesians",
            "Filipenses": "Philippians",
            "Colossenses": "Colossians",
            "1Tessalonicenses": "1 Thessalonians",
            "2Tessalonicenses": "2 Thessalonians",
            "1Timóteo": "1 Timothy",
            "2Timóteo": "2 Timothy",
            "Tito": "Titus",
            "Filemom": "Philemon",
            "Hebreus": "Hebrews",
            "Tiago": "James",
            "1Pedro": "1 Peter",
            "2Pedro": "2 Peter",
            "1João": "1 John",
            "2João": "2 John",
            "3João": "3 John",
            "Judas": "Jude",
            "Apocalipse": "Revelation"
        },
        'plan_started': 'Plan started on:',
        'plan_ends': 'Predicted end date:',
        'plan_not_started': 'You haven\'t started this plan yet.',
        'plan_not_started_desc': 'Click the button below to begin your reading journey!',
        'start_plan_btn': '📖 Start Plan Today',
        'late_flexible_msg': 'You have pending readings in this plan.',
        'late_flexible_btn': 'Resume where you left off'
    },
    'es': {
        'subtitle': 'Quiet Time Now', 'tagline': 'Tu progreso de lectura bíblica en un solo lugar',
        'choose_plan': 'Elige tu plan de lectura',
        'plan_icppg_2026': 'Plan ICPPG 2026', 'plan_icppg_2026_desc': 'Plan oficial de la iglesia',
        'plan_kids_jovens': 'Plan Niños/Jóvenes', 'plan_kids_jovens_desc': 'Historias de Jesús (Lectura Corta)',
        'plan_proverbios_31': 'Proverbios en 31 días', 'plan_proverbios_31_desc': '1 capítulo por día',
        'plan_canonical': 'Génesis a Apocalipsis', 'plan_canonical_desc': 'Orden tradicional (365 días)',
        'plan_chronological': 'Orden Cronológico', 'plan_chronological_desc': 'Orden de eventos históricos',
        'plan_maratona_180': 'Maratón 180 Días', 'plan_maratona_180_desc': 'Biblia completa (ritmo moderado)',
        'plan_maratona_120': 'Maratón 120 Días', 'plan_maratona_120_desc': 'Intensivo (Biblia completa en 4 meses)',
        'plan_new_testament': 'Nuevo Testamento', 'plan_new_testament_desc': '27 libros en 3 meses',
        'plan_old_testament': 'Antiguo Testamento', 'plan_old_testament_desc': '39 libros en 6 meses',
        'suggest_plan': 'Sugiere tu plan', 'suggest_plan_desc': 'Envía el plan de tu iglesia',
        'warning_title': 'Aviso Importante',
        'warning_text': 'Tus datos se guardan solo en este navegador. Si borras el historial, tu progreso se perderá.',
        'btn_backup': '📥 Guardar progreso', 'btn_restore': '📤 Restaurar progreso',
        'backup_success': '✅ ¡Copia de seguridad exportada con éxito!',
        'backup_invalid': '❌ ¡Archivo de copia de seguridad inválido!',
        'restore_confirm': '⚠️ Esto sobrescribirá su progreso actual. ¿Desea continuar?',
        'restore_success': '✅ ¡Copia de seguridad restaurada con éxito!',
        'restore_error': '❌ ¡Error al leer el archivo de copia de seguridad!',
        'todays_reading': 'Lectura de Hoy', 'total_progress': 'Progreso Total',
        'of': 'de', 'days': 'días', 'chapters': 'capítulos', 'label_books': 'libros',
        'this_month': 'Este Mes', 'bible': 'BIBLIA',
        'browse_by_month': 'Navegar por Mes',
        'back_to_top': 'Volver', 'go_to_end': 'Final',
        'congrats_title': '¡Felicidades!',
        'verse_text': '"Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón."',
        'verse_ref': 'Salmos 37:4 (RVR1960)',
        'amen': '¡Amén!',
        'month_names': ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        'month_prefix': 'Mes', 'day_prefix': 'Día',
        'proverbs': 'Proverbios',
        'read_btn': 'Marcar', 'read_done': '✓ Leído',
        'mark_all': '✓ Marcar todo', 'unmark_all': '✗ Desmarcar todo',
        'loading': 'Cargando...', 'no_reading': 'Sin lectura programada',
        'completed_ribbon': 'COMPLETO',
        'congrats_month': '¡Has completado todas las lecturas del mes!',
        'books': {
            "Gênesis": "Génesis",
            "Êxodo": "Éxodo",
            "Levítico": "Levítico",
            "Números": "Números",
            "Deuteronômio": "Deuteronomio",
            "Josué": "Josué",
            "Juízes": "Jueces",
            "Rute": "Rut",
            "1Samuel": "1 Samuel",
            "2Samuel": "2 Samuel",
            "1Reis": "1 Reyes",
            "2Reis": "2 Reyes",
            "1Crônicas": "1 Crónicas",
            "2Crônicas": "2 Crónicas",
            "Esdras": "Esdras",
            "Neemias": "Nehemías",
            "Ester": "Ester",
            "Jó": "Job",
            "Salmos": "Salmos",
            "Provérbios": "Proverbios",
            "Eclesiastes": "Eclesiastés",
            "Cantares": "Cantar de los Cantares",
            "Isaías": "Isaías",
            "Jeremias": "Jeremías",
            "Lamentações": "Lamentaciones",
            "Ezequiel": "Ezequiel",
            "Daniel": "Daniel",
            "Oseias": "Oseas",
            "Joel": "Joel",
            "Amós": "Amós",
            "Obadias": "Abdías",
            "Jonas": "Jonás",
            "Miqueias": "Miqueas",
            "Naum": "Nahum",
            "Habacuque": "Habacuc",
            "Sofonias": "Sofonías",
            "Ageu": "Hageo",
            "Zacarias": "Zacarías",
            "Malaquias": "Malaquías",
            "Mateus": "Mateo",
            "Marcos": "Marcos",
            "Lucas": "Lucas",
            "João": "Juan",
            "Atos": "Hechos",
            "Romanos": "Romanos",
            "1Coríntios": "1 Corintios",
            "2Coríntios": "2 Corintios",
            "Gálatas": "Gálatas",
            "Efésios": "Efesios",
            "Filipenses": "Filipenses",
            "Colossenses": "Colosenses",
            "1Tessalonicenses": "1 Tesalonicenses",
            "2Tessalonicenses": "2 Tesalonicenses",
            "1Timóteo": "1 Timoteo",
            "2Timóteo": "2 Timoteo",
            "Tito": "Tito",
            "Filemom": "Filemón",
            "Hebreus": "Hebreos",
            "Tiago": "Santiago",
            "1Pedro": "1 Pedro",
            "2Pedro": "2 Pedro",
            "1João": "1 Juan",
            "2João": "2 Juan",
            "3João": "3 Juan",
            "Judas": "Judas",
            "Apocalipse": "Apocalipsis"
        },
        'plan_started': 'Plan iniciado el:',
        'plan_ends': 'Previsión de término:',
        'plan_not_started': 'Aún no has iniciado este plan.',
        'plan_not_started_desc': '¡Haz clic en el botón para comenzar tu jornada de lectura!',
        'start_plan_btn': '📖 Iniciar Plan Hoy',
        'late_flexible_msg': 'Tienes lecturas pendientes en este plan.',
        'late_flexible_btn': 'Retomar donde lo dejaste'
    },
    'de': {
        'subtitle': 'Quiet Time Now', 'tagline': 'Dein Bibellese-Fortschritt an einem Ort',
        'choose_plan': 'Wähle deinen Leseplan',
        'plan_icppg_2026': 'ICPPG 2026 Plan', 'plan_icppg_2026_desc': 'Offizieller Gemeindeplan',
        'plan_kids_jovens': 'Kinder/Jugend Plan', 'plan_kids_jovens_desc': 'Geschichten Jesu (Kurzlesung)',
        'plan_proverbios_31': 'Sprüche in 31 Tagen', 'plan_proverbios_31_desc': '1 Kapitel pro Tag',
        'plan_canonical': 'Genesis bis Offenbarung', 'plan_canonical_desc': 'Traditionelle Reihenfolge (365 Tage)',
        'plan_chronological': 'Chronologische Reihenfolge', 'plan_chronological_desc': 'Historische Ereignisse',
        'plan_maratona_180': '180-Tage Marathon', 'plan_maratona_180_desc': 'Komplette Bibel (Moderates Tempo)',
        'plan_maratona_120': '120-Tage Marathon', 'plan_maratona_120_desc': 'Intensiv (Ganze Bibel in 4 Monaten)',
        'plan_new_testament': 'Neues Testament', 'plan_new_testament_desc': '27 Bücher in 3 Monaten',
        'plan_old_testament': 'Altes Testament', 'plan_old_testament_desc': '39 Bücher in 6 Monaten',
        'suggest_plan': 'Schlage deinen Plan vor', 'suggest_plan_desc': 'Sende uns deinen Gemeindeplan',
        'warning_title': 'Wichtiger Hinweis',
        'warning_text': 'Deine Daten werden nur in diesem Browser gespeichert. Wenn du den Verlauf löschst, geht dein Fortschritt verloren.',
        'btn_backup': '📥 Fortschritt speichern', 'btn_restore': '📤 Fortschritt wiederherstellen',
        'backup_success': '✅ Backup erfolgreich exportiert!',
        'backup_invalid': '❌ Ungültige Backup-Datei!',
        'restore_confirm': '⚠️ Dies wird Ihren aktuellen Fortschritt überschreiben. Möchten Sie fortfahren?',
        'restore_success': '✅ Backup erfolgreich wiederhergestellt!',
        'restore_error': '❌ Fehler beim Lesen der Backup-Datei!',
        'todays_reading': 'Heutige Lesung', 'total_progress': 'Gesamtfortschritt',
        'of': 'von', 'days': 'Tage', 'chapters': 'Kapitel', 'label_books': 'Bücher',
        'this_month': 'Dieser Monat', 'bible': 'BIBEL',
        'browse_by_month': 'Nach Monat durchsuchen',
        'back_to_top': 'Oben', 'go_to_end': 'Ende',
        'congrats_title': 'Herzlichen Glückwunsch!',
        'verse_text': '"Habe deine Lust am HERRN; der wird dir geben, was dein Herz wünscht."',
        'verse_ref': 'Psalm 37:4 (LUT)',
        'amen': 'Amen!',
        'month_names': ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        'month_prefix': 'Monat', 'day_prefix': 'Tag',
        'proverbs': 'Sprüche',
        'read_btn': 'Markieren', 'read_done': '✓ Gelesen',
        'mark_all': '✓ Alles markieren', 'unmark_all': '✗ Alles entfernen',
        'loading': 'Laden...', 'no_reading': 'Keine Lesung geplant',
        'completed_ribbon': 'FERTIG',
        'congrats_month': 'Du hast alle Lesungen des Monats abgeschlossen!',
        'books': {
            "Gênesis": "Genesis",
            "Êxodo": "Exodus",
            "Levítico": "Levitikus",
            "Números": "Numeri",
            "Deuteronômio": "Deuteronomium",
            "Josué": "Josua",
            "Juízes": "Richter",
            "Rute": "Rut",
            "1Samuel": "1. Samuel",
            "2Samuel": "2. Samuel",
            "1Reis": "1. Könige",
            "2Reis": "2. Könige",
            "1Crônicas": "1. Chronik",
            "2Crônicas": "2. Chronik",
            "Esdras": "Esra",
            "Neemias": "Nehemia",
            "Ester": "Ester",
            "Jó": "Hiob",
            "Salmos": "Psalmen",
            "Provérbios": "Sprüche",
            "Eclesiastes": "Prediger",
            "Cantares": "Hohelied",
            "Isaías": "Jesaja",
            "Jeremias": "Jeremia",
            "Lamentações": "Klagelieder",
            "Ezequiel": "Hesekiel",
            "Daniel": "Daniel",
            "Oseias": "Hosea",
            "Joel": "Joel",
            "Amós": "Amos",
            "Obadias": "Obadja",
            "Jonas": "Jona",
            "Miqueias": "Micha",
            "Naum": "Nahum",
            "Habacuque": "Habakuk",
            "Sofonias": "Zefanja",
            "Ageu": "Haggai",
            "Zacarias": "Sacharja",
            "Malaquias": "Maleachi",
            "Mateus": "Matthäus",
            "Marcos": "Markus",
            "Lucas": "Lukas",
            "João": "Johannes",
            "Atos": "Apostelgeschichte",
            "Romanos": "Römer",
            "1Coríntios": "1. Korinther",
            "2Coríntios": "2. Korinther",
            "Gálatas": "Galater",
            "Efésios": "Epheser",
            "Filipenses": "Philipper",
            "Colossenses": "Kolosser",
            "1Tessalonicenses": "1. Thessalonicher",
            "2Tessalonicenses": "2. Thessalonicher",
            "1Timóteo": "1. Timotheus",
            "2Timóteo": "2. Timotheus",
            "Tito": "Titus",
            "Filemom": "Philemon",
            "Hebreus": "Hebräer",
            "Tiago": "Jakobus",
            "1Pedro": "1. Petrus",
            "2Pedro": "2. Petrus",
            "1João": "1. Johannes",
            "2João": "2. Johannes",
            "3João": "3. Johannes",
            "Judas": "Judas",
            "Apocalipse": "Offenbarung"
        },
        'plan_started': 'Plan gestartet am:',
        'plan_ends': 'Voraussichtlicher Abschluss:',
        'plan_not_started': 'Du hast diesen Plan noch nicht gestartet.',
        'plan_not_started_desc': 'Klicke auf den Button, um deine Lesereise zu beginnen!',
        'start_plan_btn': '📖 Plan Heute Starten',
        'late_flexible_msg': 'Du hast ausstehende Lesungen in diesem Plan.',
        'late_flexible_btn': 'Fortfahren wo du aufgehört hast'
    },
    'zh': {
        'subtitle': 'Quiet Time Now', 'tagline': '您的一站式圣经阅读进度',
        'choose_plan': '选择您的阅读计划',
        'plan_icppg_2026': 'ICPPG 2026 计划', 'plan_icppg_2026_desc': '官方教会计划',
        'plan_kids_jovens': '儿童/青年计划', 'plan_kids_jovens_desc': '耶稣的故事（短篇阅读）',
        'plan_proverbios_31': '31天箴言', 'plan_proverbios_31_desc': '每天一章',
        'plan_canonical': '创世记到启示录', 'plan_canonical_desc': '传统顺序（365天）',
        'plan_chronological': '按时间顺序', 'plan_chronological_desc': '历史事件顺序',
        'plan_maratona_180': '180天马拉松', 'plan_maratona_180_desc': '完整圣经（中等速度）',
        'plan_maratona_120': '120天马拉松', 'plan_maratona_120_desc': '强化（4个月读完圣经）',
        'plan_new_testament': '新约', 'plan_new_testament_desc': '3个月读完27卷书',
        'plan_old_testament': '旧约', 'plan_old_testament_desc': '6个月读完39卷书',
        'suggest_plan': '建议您的计划', 'suggest_plan_desc': '发送贵教会的计划',
        'warning_title': '重要提示',
        'warning_text': '您的数据仅保存在此浏览器中。如果清除历史记录，进度将丢失。',
        'btn_backup': '📥 保存进度', 'btn_restore': '📤 恢复进度',
        'backup_success': '✅ 备份导出成功！',
        'backup_invalid': '❌ 备份文件无效！',
        'restore_confirm': '⚠️ 这将覆盖您当前的进度。您想继续吗？',
        'restore_success': '✅ 备份恢复成功！',
        'restore_error': '❌ 读取备份文件时出错！',
        'todays_reading': '今日阅读', 'total_progress': '总进度',
        'of': '/', 'days': '天', 'chapters': '章', 'label_books': '卷',
        'this_month': '本月', 'bible': '圣经',
        'browse_by_month': '按月浏览',
        'back_to_top': '顶部', 'go_to_end': '底部',
        'congrats_title': '恭喜！',
        'verse_text': '“又要以耶和华为乐，他就将你心里所求的赐给你。”',
        'verse_ref': '诗篇 37:4 (CUNPSS)',
        'amen': '阿们！',
        'month_names': ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        'month_prefix': '第', 'day_prefix': '第', // Special handling for zh/ja suffix might be needed
        'proverbs': '箴言',
        'read_btn': '标记', 'read_done': '✓ 已读',
        'mark_all': '✓ 全部标记', 'unmark_all': '✗全部取消',
        'loading': '加载中...', 'no_reading': '无计划阅读',
        'completed_ribbon': '完成',
        'congrats_month': '您已完成本月的所有阅读！',
        'books': {
            "Gênesis": "创世记",
            "Êxodo": "出埃及记",
            "Levítico": "利未记",
            "Números": "民数记",
            "Deuteronômio": "申命记",
            "Josué": "约书亚记",
            "Juízes": "士师记",
            "Rute": "路得记",
            "1Samuel": "撒母耳记上",
            "2Samuel": "撒母耳记下",
            "1Reis": "列王纪上",
            "2Reis": "列王纪下",
            "1Crônicas": "历代志上",
            "2Crônicas": "历代志下",
            "Esdras": "以斯拉记",
            "Neemias": "尼希米记",
            "Ester": "以斯帖记",
            "Jó": "约伯记",
            "Salmos": "诗篇",
            "Provérbios": "箴言",
            "Eclesiastes": "传道书",
            "Cantares": "雅歌",
            "Isaías": "以赛亚书",
            "Jeremias": "耶利米书",
            "Lamentações": "耶利米哀歌",
            "Ezequiel": "以西结书",
            "Daniel": "但以理书",
            "Oseias": "何西阿书",
            "Joel": "约珥书",
            "Amós": "阿摩司书",
            "Obadias": "俄巴底亚书",
            "Jonas": "约拿书",
            "Miqueias": "弥迦书",
            "Naum": "那鸿书",
            "Habacuque": "哈巴谷书",
            "Sofonias": "西番雅书",
            "Ageu": "哈该书",
            "Zacarias": "撒迦利亚书",
            "Malaquias": "玛拉基书",
            "Mateus": "马太福音",
            "Marcos": "马可福音",
            "Lucas": "路加福音",
            "João": "约翰福音",
            "Atos": "使徒行传",
            "Romanos": "罗马书",
            "1Coríntios": "哥林多前书",
            "2Coríntios": "哥林多后书",
            "Gálatas": "加拉太书",
            "Efésios": "以弗所书",
            "Filipenses": "腓立比书",
            "Colossenses": "歌罗西书",
            "1Tessalonicenses": "帖撒罗尼迦前书",
            "2Tessalonicenses": "帖撒罗尼迦后书",
            "1Timóteo": "提摩太前书",
            "2Timóteo": "提摩太后书",
            "Tito": "提多书",
            "Filemom": "腓利门书",
            "Hebreus": "希伯来书",
            "Tiago": "雅各书",
            "1Pedro": "彼得前书",
            "2Pedro": "彼得后书",
            "1João": "约翰一书",
            "2João": "约翰二书",
            "3João": "约翰三书",
            "Judas": "犹大书",
            "Apocalipse": "启示录"
        },
        'plan_started': '计划开始于：',
        'plan_ends': '预计结束时间：',
        'plan_not_started': '您还未开始此计划。',
        'plan_not_started_desc': '点击下方按钮开始您的阅读之旅！',
        'start_plan_btn': '📖 今天开始计划',
        'late_flexible_msg': '此计划中有待完成的阅读。',
        'late_flexible_btn': '从上次继续'
    },
    'ja': {
        'subtitle': 'Quiet Time Now', 'tagline': 'あなたの聖書通読の進捗を一箇所で',
        'choose_plan': '通読プランを選択',
        'plan_icppg_2026': 'ICPPG 2026 プラン', 'plan_icppg_2026_desc': '教会公式プラン',
        'plan_kids_jovens': 'キッズ/ユース プラン', 'plan_kids_jovens_desc': 'イエスの物語（短い朗読）',
        'plan_proverbios_31': '31日間の箴言', 'plan_proverbios_31_desc': '1日1章',
        'plan_canonical': '創世記から黙示録まで', 'plan_canonical_desc': '伝統的な順序（365日）',
        'plan_chronological': '年代順', 'plan_chronological_desc': '歴史的出来事の順序',
        'plan_maratona_180': '180日マラソン', 'plan_maratona_180_desc': '聖書全巻（中程度のペース）',
        'plan_maratona_120': '120日マラソン', 'plan_maratona_120_desc': '集中（4ヶ月で聖書全巻）',
        'plan_new_testament': '新約聖書', 'plan_new_testament_desc': '3ヶ月で27巻',
        'plan_old_testament': '旧約聖書', 'plan_old_testament_desc': '6ヶ月で39巻',
        'suggest_plan': 'プランを提案', 'suggest_plan_desc': 'あなたの教会のプランを送信',
        'warning_title': '重要な警告',
        'warning_text': 'データはこのブラウザにのみ保存されます。履歴を消去すると、進捗は失われます。',
        'btn_backup': '📥 進捗を保存', 'btn_restore': '📤 進捗を復元',
        'backup_success': '✅ バックアップのエクスポートに成功しました！',
        'backup_invalid': '❌ 無効なバックアップファイルです！',
        'restore_confirm': '⚠️ これにより現在の進捗が上書きされます。続けますか？',
        'restore_success': '✅ バックアップの復元に成功しました！',
        'restore_error': '❌ バックアップファイルの読み込みエラー！',
        'todays_reading': '今日の朗読', 'total_progress': '全体の進捗',
        'of': '/', 'days': '日', 'chapters': '章', 'label_books': '巻',
        'this_month': '今月', 'bible': '聖書',
        'browse_by_month': '月ごとに表示',
        'back_to_top': 'トップ', 'go_to_end': '最後',
        'congrats_title': 'おめでとうございます！',
        'verse_text': '「主をおのれの喜びとせよ。主はあなたの心の願いをかなえてくださる。」',
        'verse_ref': '詩篇 37:4 (新改訳)',
        'amen': 'アーメン！',
        'month_names': ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        'month_prefix': '', 'day_prefix': '', // JP uses suffix mostly, handled in logic or ignored
        'proverbs': '箴言',
        'read_btn': '記録', 'read_done': '✓ 完了',
        'mark_all': '✓ 全て記録', 'unmark_all': '✗ 全て取消',
        'loading': '読み込み中...', 'no_reading': '予定なし',
        'completed_ribbon': '完了',
        'congrats_month': '今月の朗読をすべて完了しました！',
        'books': {
            "Gênesis": "創世記",
            "Êxodo": "出エジプト記",
            "Levítico": "レビ記",
            "Números": "民数記",
            "Deuteronômio": "申命記",
            "Josué": "ヨシュア記",
            "Juízes": "士師記",
            "Rute": "ルツ記",
            "1Samuel": "サムエル記第一",
            "2Samuel": "サムエル記第二",
            "1Reis": "列王記第一",
            "2Reis": "列王記第二",
            "1Crônicas": "歴代誌第一",
            "2Crônicas": "歴代誌第二",
            "Esdras": "エズラ記",
            "Neemias": "ネヘミヤ記",
            "Ester": "エステル記",
            "Jó": "ヨブ記",
            "Salmos": "詩篇",
            "Provérbios": "箴言",
            "Eclesiastes": "伝道者の書",
            "Cantares": "雅歌",
            "Isaías": "イザヤ書",
            "Jeremias": "エレミヤ書",
            "Lamentações": "哀歌",
            "Ezequiel": "エゼキエル書",
            "Daniel": "ダニエル书",
            "Oseias": "ホセア書",
            "Joel": "ヨエル書",
            "Amós": "アモス書",
            "Obadias": "オバデヤ書",
            "Jonas": "ヨナ書",
            "Miqueias": "ミカ書",
            "Naum": "ナホム書",
            "Habacuque": "ハバクク書",
            "Sofonias": "ゼパニヤ書",
            "Ageu": "ハガイ書",
            "Zacarias": "ゼカリヤ書",
            "Malaquias": "マラキ書",
            "Mateus": "マタイの福音書",
            "Marcos": "マルコの福音書",
            "Lucas": "ルカの福音書",
            "João": "ヨハネの福音書",
            "Atos": "使徒の働き",
            "Romanos": "ローマ人への手紙",
            "1Coríntios": "コリント人への手紙第一",
            "2Coríntios": "コリント人への手纸第二",
            "Gálatas": "ガラテヤ人への手紙",
            "Efésios": "エペソ人への手紙",
            "Filipenses": "ピリピ人への手紙",
            "Colossenses": "コロサイ人への手紙",
            "1Tessalonicenses": "テサロニケ人への手紙第一",
            "2Tessalonicenses": "テサロニケ人への手紙第二",
            "1Timóteo": "テモテへの手紙第一",
            "2Timóteo": "テモテへの手紙第二",
            "Tito": "テトスへの手紙",
            "Filemom": "ピレモンへの手紙",
            "Hebreus": "ヘブル人への手紙",
            "Tiago": "ヤコブの手紙",
            "1Pedro": "ペテロの手紙第一",
            "2Pedro": "ペテロの手紙第二",
            "1João": "ヨハネの手紙第一",
            "2João": "ヨハネの手紙第二",
            "3João": "ヨハネの手紙第三",
            "Judas": "犹大の手紙",
            "Apocalipse": "ヨハネの黙示録"
        },
        'plan_started': '計画開始日：',
        'plan_ends': '完了予定日：',
        'plan_not_started': 'このプランはまだ開始されていません。',
        'plan_not_started_desc': 'ボタンをクリックして読書の旅を始めましょう！',
        'start_plan_btn': '📖 今日から開始',
        'late_flexible_msg': 'このプランに未完了の読書があります。',
        'late_flexible_btn': '続きから再開'
    },
    'ru': {
        'subtitle': 'Quiet Time Now', 'tagline': 'Ваш прогресс чтения Библии в одном месте',
        'choose_plan': 'Выберите план чтения',
        'plan_icppg_2026': 'План ICPPG 2026', 'plan_icppg_2026_desc': 'Официальный церковный план',
        'plan_kids_jovens': 'Детский/Молодежный план', 'plan_kids_jovens_desc': 'Истории об Иисусе (краткое чтение)',
        'plan_proverbios_31': 'Притчи за 31 день', 'plan_proverbios_31_desc': '1 глава в день',
        'plan_canonical': 'От Бытия до Откровения', 'plan_canonical_desc': 'Традиционный порядок (365 дней)',
        'plan_chronological': 'Хронологический порядок', 'plan_chronological_desc': 'Порядок исторических событий',
        'plan_maratona_180': '180-дневный марафон', 'plan_maratona_180_desc': 'Вся Библия (умеренный темп)',
        'plan_maratona_120': '120-дневный марафон', 'plan_maratona_120_desc': 'Интенсив (вся Библия за 4 месяца)',
        'plan_new_testament': 'Новый Завет', 'plan_new_testament_desc': '27 книг за 3 месяца',
        'plan_old_testament': 'Ветхий Завет', 'plan_old_testament_desc': '39 книг за 6 месяцев',
        'suggest_plan': 'Предложите свой план', 'suggest_plan_desc': 'Отправьте нам план вашей церкви',
        'warning_title': 'Важное предупреждение',
        'warning_text': 'Ваши данные сохраняются только в этом браузере. Если вы очистите историю, ваш прогресс будет утерян.',
        'btn_backup': '📥 Сохранить прогресс', 'btn_restore': '📤 Восстановить прогресс',
        'backup_success': '✅ Бэкап успешно экспортирован!',
        'backup_invalid': '❌ Неверный файл бэкапа!',
        'restore_confirm': '⚠️ Это перезапишет ваш текущий прогресс. Желаете продолжить?',
        'restore_success': '✅ Бэкап успешно восстановлен!',
        'restore_error': '❌ Ошибка при чтении файла бэкапа!',
        'todays_reading': 'Сегодняшнее чтение', 'total_progress': 'Общий прогресс',
        'of': 'из', 'days': 'дней', 'chapters': 'глав', 'label_books': 'книг',
        'this_month': 'В этом месяце', 'bible': 'БИБЛИЯ',
        'browse_by_month': 'Просмотр по месяцам',
        'back_to_top': 'Вверх', 'go_to_end': 'В конец',
        'congrats_title': 'Поздравляем!',
        'verse_text': '"Утешайся Господом, и Он исполнит желания сердца твоего."',
        'verse_ref': 'Псалтирь 36:4 (RST)',
        'amen': 'Аминь!',
        'month_names': ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        'month_prefix': 'Месяц', 'day_prefix': 'День',
        'proverbs': 'Притчи',
        'read_btn': 'Отметить', 'read_done': '✓ Прочитано',
        'mark_all': '✓ Отметить все', 'unmark_all': '✗ Снять все',
        'loading': 'Загрузка...', 'no_reading': 'Чтение не запланировано',
        'completed_ribbon': 'ГОТОВО',
        'congrats_month': 'Вы завершили все чтения за этот месяц!',
        'books': {
            "Gênesis": "Бытие",
            "Êxodo": "Исход",
            "Levítico": "Левит",
            "Números": "Числа",
            "Deuteronômio": "Второзаконие",
            "Josué": "Иисус Навин",
            "Juízes": "Судьи",
            "Rute": "Руфь",
            "1Samuel": "1-я Царств",
            "2Samuel": "2-я Царств",
            "1Reis": "3-я Царств",
            "2Reis": "4-я Царств",
            "1Crônicas": "1-я Паралипоменон",
            "2Crônicas": "2-я Паралипоменон",
            "Esdras": "Ездра",
            "Neemias": "Неемия",
            "Ester": "Есфирь",
            "Jó": "Иов",
            "Salmos": "Псалтирь",
            "Provérbios": "Притчи",
            "Eclesiastes": "Екклесиаст",
            "Cantares": "Песнь Песней",
            "Isaías": "Исаия",
            "Jeremias": "Иеремия",
            "Lamentações": "Плач Иеремии",
            "Ezequiel": "Иезекииль",
            "Daniel": "Даниил",
            "Oseias": "Осия",
            "Joel": "Иоиль",
            "Amós": "Амос",
            "Obadias": "Авдий",
            "Jonas": "Иона",
            "Miqueias": "Михей",
            "Naum": "Наум",
            "Habacuque": "Аввакум",
            "Sofonias": "Софония",
            "Ageu": "Аггей",
            "Zacarias": "Захария",
            "Malaquias": "Малахия",
            "Mateus": "От Матфея",
            "Marcos": "От Марка",
            "Lucas": "От Луки",
            "João": "От Иоанна",
            "Atos": "Деяния",
            "Romanos": "К Римлянам",
            "1Coríntios": "1-е Коринфянам",
            "2Coríntios": "2-е Коринфянам",
            "Gálatas": "К Галатам",
            "Efésios": "К Ефесянам",
            "Filipenses": "К Филиппийцам",
            "Colossenses": "К Колоссянам",
            "1Tessalonicenses": "1-е Фессалоникийцам",
            "2Tessalonicenses": "2-е Фессалоникийцам",
            "1Timóteo": "1-е Тимофею",
            "2Timóteo": "2-е Тимофею",
            "Tito": "Титу",
            "Filemom": "К Филимону",
            "Hebreus": "К Евреям",
            "Tiago": "Иакова",
            "1Pedro": "1-е Петра",
            "2Pedro": "2-е Петра",
            "1João": "1-е Иоанна",
            "2João": "2-е Иоанна",
            "3João": "3-е Иоанна",
            "Judas": "Иуды",
            "Apocalipse": "Откровение"
        },
        'plan_started': 'План начат:',
        'plan_ends': 'Ожидаемое завершение:',
        'plan_not_started': 'Вы еще не начали этот план.',
        'plan_not_started_desc': 'Нажмите кнопку ниже, чтобы начать чтение!',
        'start_plan_btn': '📖 Начать план сегодня',
        'late_flexible_msg': 'У вас есть непрочитанные главы в этом плане.',
        'late_flexible_btn': 'Продолжить с места остановки'
    },
    'it': {
        'subtitle': 'Quiet Time Now', 'tagline': 'Il tuo progresso di lettura della Bibbia in un unico posto',
        'choose_plan': 'Scegli il tuo piano di lettura',
        'plan_icppg_2026': 'Piano ICPPG 2026', 'plan_icppg_2026_desc': 'Piano ufficiale della chiesa',
        'plan_kids_jovens': 'Piano Bambini/Giovani', 'plan_kids_jovens_desc': 'Storie di Gesù (Lettura breve)',
        'plan_proverbios_31': 'Proverbi in 31 giorni', 'plan_proverbios_31_desc': '1 capitolo al giorno',
        'plan_canonical': 'Da Genesi ad Apocalisse', 'plan_canonical_desc': 'Ordine tradizionale (365 giorni)',
        'plan_chronological': 'Ordine Cronologico', 'plan_chronological_desc': 'Ordine degli eventi storici',
        'plan_maratona_180': 'Maratona di 180 giorni', 'plan_maratona_180_desc': 'Bibbia completa (ritmo moderato)',
        'plan_maratona_120': 'Maratona di 120 giorni', 'plan_maratona_120_desc': 'Intensivo (tutta la Bibbia in 4 mesi)',
        'plan_new_testament': 'Nuovo Testamento', 'plan_new_testament_desc': '27 libri in 3 mesi',
        'plan_old_testament': 'Antico Testamento', 'plan_old_testament_desc': '39 libri in 6 mesi',
        'suggest_plan': 'Suggerisci il tuo piano', 'suggest_plan_desc': 'Inviaci il piano della tua chiesa',
        'warning_title': 'Avviso Importante',
        'warning_text': 'I tuoi dati sono salvati solo in questo browser. Se cancelli la cronologia, il tuo progresso andrà perso.',
        'btn_backup': '📥 Salva progresso', 'btn_restore': '📤 Ripristina progresso',
        'backup_success': '✅ Backup esportato con successo!',
        'backup_invalid': '❌ File di backup non valido!',
        'restore_confirm': '⚠️ Questo sovrascriverà il tuo progresso attuale. Vuoi continuare?',
        'restore_success': '✅ Backup ripristinato con successo!',
        'restore_error': '❌ Errore durante la lettura del file di backup!',
        'todays_reading': 'Lettura di Oggi', 'total_progress': 'Progresso Totale',
        'of': 'di', 'days': 'giorni', 'chapters': 'capitoli', 'label_books': 'libri',
        'this_month': 'Questo Mese', 'bible': 'BIBBIA',
        'browse_by_month': 'Sfoglia per Mese',
        'back_to_top': 'Inizio', 'go_to_end': 'Fine',
        'congrats_title': 'Congratulazioni!',
        'verse_text': '"Prendi il tuo diletto nell\'Eterno, ed egli ti darà i desideri del tuo cuore."',
        'verse_ref': 'Salmo 37:4 (Riveduta)',
        'amen': 'Amen!',
        'month_names': ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        'month_prefix': 'Mese', 'day_prefix': 'Giorno',
        'proverbs': 'Proverbi',
        'read_btn': 'Segna', 'read_done': '✓ Fatto',
        'mark_all': '✓ Segna tutto', 'unmark_all': '✗ Rimuovi tutto',
        'loading': 'Caricamento...', 'no_reading': 'Nessuna lettura prevista',
        'completed_ribbon': 'COMPLETO',
        'congrats_month': 'Hai completato tutte le letture del mese!',
        'books': {
            "Gênesis": "Genesi",
            "Êxodo": "Esodo",
            "Levítico": "Levitico",
            "Números": "Numeri",
            "Deuteronômio": "Deuteronomio",
            "Josué": "Giosuè",
            "Juízes": "Giudici",
            "Rute": "Rut",
            "1Samuel": "1 Samuele",
            "2Samuel": "2 Samuele",
            "1Reis": "1 Re",
            "2Reis": "2 Re",
            "1Crônicas": "1 Cronache",
            "2Crônicas": "2 Cronache",
            "Esdras": "Esdra",
            "Neemias": "Neemia",
            "Ester": "Ester",
            "Jó": "Giobbe",
            "Salmos": "Salmi",
            "Provérbios": "Proverbi",
            "Eclesiastes": "Ecclesiaste",
            "Cantares": "Cantico dei Cantici",
            "Isaías": "Isaia",
            "Jeremias": "Geremia",
            "Lamentações": "Lamentazioni",
            "Ezequiel": "Ezechiele",
            "Daniel": "Daniele",
            "Oseias": "Osea",
            "Joel": "Gioele",
            "Amós": "Amos",
            "Obadias": "Abdia",
            "Jonas": "Giona",
            "Miqueias": "Michea",
            "Naum": "Nahum",
            "Habacuque": "Abacuc",
            "Sofonias": "Sofonia",
            "Ageu": "Aggeo",
            "Zacarias": "Zaccaria",
            "Malaquias": "Malachia",
            "Mateus": "Matteo",
            "Marcos": "Marco",
            "Lucas": "Luca",
            "João": "Giovanni",
            "Atos": "Atti",
            "Romanos": "Romani",
            "1Coríntios": "1 Corinzi",
            "2Coríntios": "2 Corinzi",
            "Gálatas": "Galati",
            "Efésios": "Efesini",
            "Filipenses": "Filippesi",
            "Colossenses": "Colossesi",
            "1Tessalonicenses": "1 Tessalonicesi",
            "2Tessalonicenses": "2 Tessalonicesi",
            "1Timóteo": "1 Timoteo",
            "2Timóteo": "2 Timoteo",
            "Tito": "Tito",
            "Filemom": "Filemone",
            "Hebreus": "Ebrei",
            "Tiago": "Giacomo",
            "1Pedro": "1 Pietro",
            "2Pedro": "2 Pietro",
            "1João": "1 Giovanni",
            "2João": "2 Giovanni",
            "3João": "3 Giovanni",
            "Judas": "Giuda",
            "Apocalipse": "Apocalisse"
        },
        'plan_started': 'Piano iniziato il:',
        'plan_ends': 'Previsione termine:',
        'plan_not_started': 'Non hai ancora iniziato questo piano.',
        'plan_not_started_desc': 'Clicca il pulsante qui sotto per iniziare il tuo percorso di lettura!',
        'start_plan_btn': '📖 Inizia il Piano Oggi',
        'late_flexible_msg': 'Hai letture in sospeso in questo piano.',
        'late_flexible_btn': 'Riprendi da dove hai lasciato'
    }
};

// Comprehensive Bible Data (66 Books, 1189 Chapters)
const bibleData = {
    "Gênesis": 50, "Êxodo": 40, "Levítico": 27, "Números": 36, "Deuteronômio": 34, "Josué": 24, "Juízes": 21, "Rute": 4, "1Samuel": 31, "2Samuel": 24, "1Reis": 22, "2Reis": 25, "1Crônicas": 29, "2Crônicas": 36, "Esdras": 10, "Neemias": 13, "Ester": 10, "Jó": 42, "Salmos": 150, "Provérbios": 31, "Eclesiastes": 12, "Cantares": 8, "Isaías": 66, "Jeremias": 52, "Lamentações": 5, "Ezequiel": 48, "Daniel": 12, "Oseias": 14, "Joel": 3, "Amós": 9, "Obadias": 1, "Jonas": 4, "Miqueias": 7, "Naum": 3, "Habacuque": 3, "Sofonias": 3, "Ageu": 2, "Zacarias": 14, "Malaquias": 4,
    "Mateus": 28, "Marcos": 16, "Lucas": 24, "João": 21, "Atos": 28, "Romanos": 16, "1Coríntios": 16, "2Coríntios": 13, "Gálatas": 6, "Efésios": 6, "Filipenses": 4, "Colossenses": 4, "1Tessalonicenses": 5, "2Tessalonicenses": 3, "1Timóteo": 6, "2Timóteo": 4, "Tito": 3, "Filemom": 1, "Hebreus": 13, "Tiago": 5, "1Pedro": 5, "2Pedro": 3, "1João": 5, "2João": 1, "3João": 1, "Judas": 1, "Apocalipse": 22
};

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// Plan Generation Helpers (Flat structure for flexibility)
function generateKidsPlan() {
    const gospels = ["Mateus", "Marcos", "Lucas", "João"];
    const plan = [];
    let bookIdx = 0;
    let chap = 1;

    // 89 Chapters total: Mt(28) + Mc(16) + Lc(24) + Jo(21)
    // Loop until we finish all books
    while (bookIdx < gospels.length) {
        const book = gospels[bookIdx];
        plan.push({ readings: [`${book} ${chap}`] });

        chap++;
        if (chap > bibleData[book]) {
            chap = 1;
            bookIdx++;
        }
    }
    return plan;
}

function generateMarathonPlan() {
    const allBooks = Object.keys(bibleData);
    const plan = [];
    let bookIdx = 0;
    let chap = 1;

    for (let day = 1; day <= 120; day++) {
        let daily = 0;
        let dayReadings = [];
        while (daily < 10 && bookIdx < allBooks.length) {
            const book = allBooks[bookIdx];
            const remaining = bibleData[book] - chap + 1;
            const take = Math.min(remaining, 10 - daily);
            dayReadings.push(take > 1 ? `${book} ${chap}-${chap + take - 1}` : `${book} ${chap}`);
            chap += take; daily += take;
            if (chap > bibleData[book]) { chap = 1; bookIdx++; }
        }
        plan.push({ readings: dayReadings });
    }
    return plan;
}

function generateOldTestamentPlan() {
    const oldTestamentBooks = [
        "Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio", "Josué", "Juízes", "Rute", "1Samuel", "2Samuel",
        "1Reis", "2Reis", "1Crônicas", "2Crônicas", "Esdras", "Neemias", "Ester", "Jó", "Salmos", "Provérbios",
        "Eclesiastes", "Cantares", "Isaías", "Jeremias", "Lamentações", "Ezequiel", "Daniel", "Oseias", "Joel", "Amós",
        "Obadias", "Jonas", "Miqueias", "Naum", "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias"
    ];
    const plan = [];
    let bookIdx = 0;
    let chap = 1;

    for (let day = 1; day <= 180; day++) {
        let daily = 0;
        let dayReadings = [];
        // Target: 929 chaps / 180 days = 5.16
        // Pattern: 5, 5, 5, 5, 5, 6 (approx) -> Use modulo
        const target = (day % 6 === 0) ? 6 : 5;

        while (daily < target && bookIdx < oldTestamentBooks.length) {
            const book = oldTestamentBooks[bookIdx];
            const remaining = bibleData[book] - chap + 1;

            // On last day, take everything remaining implies we just loop until done? 
            // Better: just stick to target but maybe slight adjustment at very end if needed.
            // With 5.16 avg, 5 and 6 mix covers it well.

            const take = Math.min(remaining, target - daily);
            dayReadings.push(take > 1 ? `${book} ${chap}-${chap + take - 1}` : `${book} ${chap}`);
            chap += take; daily += take;
            if (chap > bibleData[book]) { chap = 1; bookIdx++; }
        }

        // Force completion on last day if close
        if (day === 180 && bookIdx < oldTestamentBooks.length) {
            while (bookIdx < oldTestamentBooks.length) {
                const book = oldTestamentBooks[bookIdx];
                const remaining = bibleData[book] - chap + 1;
                dayReadings.push(remaining > 1 ? `${book} ${chap}-${chap + remaining - 1}` : `${book} ${chap}`);
                // Advance fully
                chap = 1; bookIdx++;
            }
        }

        plan.push({ readings: dayReadings });
    }
    return plan;
}

function generateNewTestamentPlan() {
    const newTestamentBooks = [
        "Mateus", "Marcos", "Lucas", "João", "Atos", "Romanos", "1Coríntios", "2Coríntios", "Gálatas", "Efésios",
        "Filipenses", "Colossenses", "1Tessalonicenses", "2Tessalonicenses", "1Timóteo", "2Timóteo", "Tito", "Filemom", "Hebreus", "Tiago",
        "1Pedro", "2Pedro", "1João", "2João", "3João", "Judas", "Apocalipse"
    ];
    const plan = [];
    let bookIdx = 0;
    let chap = 1;

    for (let day = 1; day <= 90; day++) {
        let daily = 0;
        let dayReadings = [];
        // Target: 260 / 90 = 2.88
        const target = 3;
        while (daily < target && bookIdx < newTestamentBooks.length) {
            const book = newTestamentBooks[bookIdx];
            const remaining = bibleData[book] - chap + 1;
            const take = Math.min(remaining, target - daily);
            dayReadings.push(take > 1 ? `${book} ${chap}-${chap + take - 1}` : `${book} ${chap}`);
            chap += take; daily += take;
            if (chap > bibleData[book]) { chap = 1; bookIdx++; }
        }
        plan.push({ readings: dayReadings });
    }
    return plan;
}

function generateMarathon180Plan() {
    const allBooks = Object.keys(bibleData);
    const plan = [];
    let bookIdx = 0;
    let chap = 1;

    for (let day = 1; day <= 180; day++) {
        let daily = 0;
        let dayReadings = [];
        const target = 7; // ~6.6 chapters per day (1189/180)
        while (daily < target && bookIdx < allBooks.length) {
            const book = allBooks[bookIdx];
            const remaining = bibleData[book] - chap + 1;
            const take = Math.min(remaining, target - daily);
            dayReadings.push(take > 1 ? `${book} ${chap}-${chap + take - 1}` : `${book} ${chap}`);
            chap += take; daily += take;
            if (chap > bibleData[book]) { chap = 1; bookIdx++; }
        }
        plan.push({ readings: dayReadings });
    }
    return plan;
}

function generateProverbsPlan() {
    const plan = [];
    // Provérbios tem 31 capítulos, perfeito para um mês
    for (let day = 1; day <= 31; day++) {
        plan.push({ readings: [`Pv ${day}`] });
    }
    return plan;
}


function generateCanonicalPlan() {
    const allBooks = Object.keys(bibleData);
    const plan = [];
    let bookIdx = 0;
    let chap = 1;

    for (let day = 1; day <= 365; day++) {
        let daily = 0;
        let dayReadings = [];
        const target = (day % 4 === 0) ? 4 : 3;
        while (daily < target && bookIdx < allBooks.length) {
            const book = allBooks[bookIdx];
            const remaining = bibleData[book] - chap + 1;
            const take = Math.min(remaining, target - daily);
            dayReadings.push(take > 1 ? `${book} ${chap}-${chap + take - 1}` : `${book} ${chap}`);
            chap += take; daily += take;
            if (chap > bibleData[book]) { chap = 1; bookIdx++; }
        }

        // Force completion on last day
        if (day === 365 && bookIdx < allBooks.length) {
            while (bookIdx < allBooks.length) {
                const book = allBooks[bookIdx];
                const remaining = bibleData[book] - chap + 1;
                dayReadings.push(remaining > 1 ? `${book} ${chap}-${chap + remaining - 1}` : `${book} ${chap}`);
                chap = 1; bookIdx++;
            }
        }

        plan.push({ readings: dayReadings });
    }
    return plan;
}

function convertFixedPlanToArray(planObj) {
    const flat = [];
    monthNames.forEach(month => {
        planObj[month].forEach(dayData => {
            flat.push({ readings: dayData.readings, originalMonth: month, originalDay: dayData.day });
        });
    });
    return flat;
}

function generateChronologicalPlan() {
    // Sequência cronológica fiel dos livros e blocos de capítulos
    const sequence = [
        "Gênesis 1-11", "Jó 1-42", "Gênesis 12-50", "Êxodo 1-40", "Levítico 1-27", "Números 1-36", "Deuteronômio 1-34",
        "Josué 1-24", "Juízes 1-21", "Rute 1-4", "1Samuel 1-20",
        "Salmos 1-20", "1Samuel 21-31", "1Crônicas 1-10", "Salmos 21-40",
        "2Samuel 1-24", "1Crônicas 11-29", "Salmos 41-70",
        "1Reis 1-11", "2Crônicas 1-9", "Provérbios 1-31", "Eclesiastes 1-12", "Cantares 1-8", "Salmos 71-90",
        "1Reis 12-22", "2Crônicas 10-20", "Obadias 1", "Joel 1-3",
        "2Reis 1-14", "2Crônicas 21-25", "Jonas 1-4", "Amós 1-9", "Oseias 1-14",
        "2Reis 15-20", "2Crônicas 26-32", "Isaías 1-66", "Miqueias 1-7",
        "2Reis 21-25", "2Crônicas 33-36", "Naum 1-3", "Sofonias 1-3", "Habacuque 1-3", "Jeremias 1-52", "Lamentações 1-5",
        "Ezequiel 1-48", "Daniel 1-12", "Esdras 1-6", "Ageu 1-2", "Zacarias 1-14",
        "Ester 1-10", "Esdras 7-10", "Neemias 1-13", "Malaquias 1-4", "Salmos 91-150",
        "Marcos 1-16", "Mateus 1-28", "Lucas 1-24", "João 1-21",
        "Atos 1-14", "Tiago 1-5", "Gálatas 1-6",
        "Atos 15-18", "1Tessalonicenses 1-5", "2Tessalonicenses 1-3",
        "Atos 19-20", "1Coríntios 1-16", "2Coríntios 1-13", "Romanos 1-16",
        "Atos 21-28", "Efésios 1-6", "Filipenses 1-4", "Colossenses 1-4", "Filemom 1", "Hebreus 1-13",
        "1Pedro 1-5", "2Pedro 1-3", "1João 1-5", "2João 1", "3João 1", "Judas 1",
        "1Timóteo 1-6", "Tito 1-3", "2Timóteo 1-4", "Apocalipse 1-22"
    ];

    let allChapters = [];
    sequence.forEach(range => {
        const parsed = parseReading(range);
        parsed.forEach(item => {
            const book = item.book;
            const start = item.start || 1;
            const end = item.end || bibleData[book] || 1;
            for (let i = start; i <= end; i++) {
                allChapters.push(`${book} ${i}`);
            }
        });
    });

    const plan = [];
    const totalChapters = allChapters.length;
    let currentChapter = 0;

    for (let day = 1; day <= 365; day++) {
        let daily = 0;
        let dayReadings = [];
        // Distribui 1189 capítulos em 365 dias (~3.25/dia)
        const target = (day % 4 === 0) ? 4 : 3;

        while (daily < target && currentChapter < totalChapters) {
            const start = currentChapter;
            let end = currentChapter;
            const currentBook = allChapters[start].split(' ')[0];

            // Tenta agrupar capítulos do mesmo livro no mesmo dia
            while (daily < target && currentChapter < totalChapters) {
                const nextBook = allChapters[currentChapter].split(' ')[0];
                if (nextBook !== currentBook) break;
                end = currentChapter;
                currentChapter++;
                daily++;
            }

            const startChap = allChapters[start].split(' ')[1];
            const endChap = allChapters[end].split(' ')[1];
            dayReadings.push(startChap === endChap ? `${currentBook} ${startChap}` : `${currentBook} ${startChap}-${endChap}`);
        }

        // Force completion on last day
        if (day === 365 && currentChapter < totalChapters) {
            // Just take the rest
            while (currentChapter < totalChapters) {
                const start = currentChapter;
                let end = currentChapter;
                const currentBook = allChapters[start].split(' ')[0];

                // Group rest of current book
                while (currentChapter < totalChapters) {
                    const nextBook = allChapters[currentChapter].split(' ')[0];
                    if (nextBook !== currentBook) break;
                    end = currentChapter;
                    currentChapter++;
                }
                const startChap = allChapters[start].split(' ')[1];
                const endChap = allChapters[end].split(' ')[1];
                dayReadings.push(startChap === endChap ? `${currentBook} ${startChap}` : `${currentBook} ${startChap}-${endChap}`);
            }
        }

        plan.push({ readings: dayReadings.length > 0 ? dayReadings : ["Leitura Concluída! 🙏"] });
    }
    return plan;
}

// LocalStorage key helper - Maintains backward compatibility for the Church Plan
function getStorageKey() {
    if (currentPlanId === 'icppg_2026') return 'bibliaProgress';
    return `bibliaProgress_${currentPlanId}`;
}

// Reading Plan Data - Based on Church Schedule
const readingPlan_ICPPG = {

    "Janeiro": [
        { day: 1, readings: ["Mateus 1-2", "Gênesis 1"] },
        { day: 2, readings: ["Mateus 3-4", "Gênesis 2"] },
        { day: 3, readings: ["Mateus 5", "Gênesis 3-4"] },
        { day: 4, readings: ["Mateus 6", "Gênesis 5-6"] },
        { day: 5, readings: ["Mateus 7", "Gênesis 7-8"] },
        { day: 6, readings: ["Mateus 8", "Gênesis 9-10"] },
        { day: 7, readings: ["Mateus 9", "Gênesis 11-12"] },
        { day: 8, readings: ["Mateus 10", "Gênesis 13-14"] },
        { day: 9, readings: ["Mateus 11", "Gênesis 15-16"] },
        { day: 10, readings: ["Mateus 12", "Gênesis 17-18"] },
        { day: 11, readings: ["Mateus 13", "Gênesis 19"] },
        { day: 12, readings: ["Mateus 14", "Gênesis 20-21"] },
        { day: 13, readings: ["Mateus 15", "Gênesis 22-23"] },
        { day: 14, readings: ["Mateus 16-17", "Gênesis 24"] },
        { day: 15, readings: ["Mateus 18", "Gênesis 25-26"] },
        { day: 16, readings: ["Mateus 19-20", "Gênesis 27"] },
        { day: 17, readings: ["Mateus 21", "Gênesis 28"] },
        { day: 18, readings: ["Mateus 22", "Gênesis 29"] },
        { day: 19, readings: ["Mateus 23", "Gênesis 30-31"] },
        { day: 20, readings: ["Mateus 24", "Gênesis 32-33"] },
        { day: 21, readings: ["Mateus 25", "Gênesis 34-35"] },
        { day: 22, readings: ["Mateus 26", "Gênesis 36"] },
        { day: 23, readings: ["Mateus 27", "Gênesis 37-38"] },
        { day: 24, readings: ["Mateus 28", "Gênesis 39-40"] },
        { day: 25, readings: ["Romanos 1", "Gênesis 41"] },
        { day: 26, readings: ["Romanos 2", "Gênesis 42"] },
        { day: 27, readings: ["Romanos 3", "Gênesis 43"] },
        { day: 28, readings: ["Romanos 4-5", "Gênesis 44-45"] },
        { day: 29, readings: ["Romanos 6-7", "Gênesis 46-47"] },
        { day: 30, readings: ["Romanos 8", "Gênesis 48"] },
        { day: 31, readings: ["Romanos 9", "Gênesis 49-50"] }
    ],
    "Fevereiro": [
        { day: 1, readings: ["Romanos 10-11", "Êxodo 1"] },
        { day: 2, readings: ["Romanos 12-13", "Êxodo 2"] },
        { day: 3, readings: ["Romanos 14-15", "Êxodo 3"] },
        { day: 4, readings: ["Romanos 16", "Êxodo 4-5"] },
        { day: 5, readings: ["Marcos 1", "Êxodo 6-7"] },
        { day: 6, readings: ["Marcos 2-3", "Êxodo 8"] },
        { day: 7, readings: ["Marcos 4", "Êxodo 9-10"] },
        { day: 8, readings: ["Marcos 5", "Êxodo 11-12"] },
        { day: 9, readings: ["Marcos 6", "Êxodo 13-14"] },
        { day: 10, readings: ["Marcos 7", "Êxodo 15-16"] },
        { day: 11, readings: ["Marcos 8", "Êxodo 17-18"] },
        { day: 12, readings: ["Marcos 9", "Êxodo 19-20"] },
        { day: 13, readings: ["Marcos 10", "Êxodo 21-22"] },
        { day: 14, readings: ["Marcos 11-12", "Êxodo 23"] },
        { day: 15, readings: ["Marcos 13", "Êxodo 24-25"] },
        { day: 16, readings: ["Marcos 14", "Êxodo 26-27"] },
        { day: 17, readings: ["Marcos 15-16", "Êxodo 28"] },
        { day: 18, readings: ["Gálatas 1-2", "Êxodo 29"] },
        { day: 19, readings: ["Gálatas 3-4", "Êxodo 30"] },
        { day: 20, readings: ["Gálatas 5-6", "Êxodo 31"] },
        { day: 21, readings: ["Efésios 1-2", "Êxodo 32"] },
        { day: 22, readings: ["Efésios 3-4", "Êxodo 33"] },
        { day: 23, readings: ["Efésios 5-6", "Êxodo 34"] },
        { day: 24, readings: ["Filipenses 1-2", "Êxodo 35"] },
        { day: 25, readings: ["Filipenses 3-4", "Êxodo 36"] },
        { day: 26, readings: ["Lucas 1", "Êxodo 37-38"] },
        { day: 27, readings: ["Lucas 2", "Êxodo 39-40"] },
        { day: 28, readings: ["Lucas 3", "Levítico 1-3"] }
    ],
    "Março": [
        { day: 1, readings: ["Lucas 4", "Levítico 4-5"] },
        { day: 2, readings: ["Lucas 5", "Levítico 6-7"] },
        { day: 3, readings: ["Lucas 6", "Levítico 8-9"] },
        { day: 4, readings: ["Lucas 7", "Levítico 10-11"] },
        { day: 5, readings: ["Lucas 8", "Levítico 12-13"] },
        { day: 6, readings: ["Lucas 9", "Levítico 14-15"] },
        { day: 7, readings: ["Lucas 10", "Levítico 16-17"] },
        { day: 8, readings: ["Lucas 11", "Levítico 18-19"] },
        { day: 9, readings: ["Lucas 12", "Levítico 20-21"] },
        { day: 10, readings: ["Lucas 13-14", "Levítico 22"] },
        { day: 11, readings: ["Lucas 15-16", "Levítico 23"] },
        { day: 12, readings: ["Lucas 17", "Levítico 24-25"] },
        { day: 13, readings: ["Lucas 18", "Levítico 26-27"] },
        { day: 14, readings: ["Lucas 19", "Números 1-2"] },
        { day: 15, readings: ["Lucas 20", "Números 3-4"] },
        { day: 16, readings: ["Lucas 21", "Números 5-6"] },
        { day: 17, readings: ["Lucas 22", "Números 7"] },
        { day: 18, readings: ["Lucas 23", "Números 8-9"] },
        { day: 19, readings: ["Lucas 24", "Números 10-11"] },
        { day: 20, readings: ["Colossenses 1-2", "Números 12-13"] },
        { day: 21, readings: ["Colossenses 3-4", "Números 14"] },
        { day: 22, readings: ["1Tessalonicenses 1-2", "Números 15"] },
        { day: 23, readings: ["1Tessalonicenses 3-4", "Números 16"] },
        { day: 24, readings: ["1Tessalonicenses 5", "Números 17-18"] },
        { day: 25, readings: ["2Tessalonicenses 1-3", "Números 19-20"] },
        { day: 26, readings: ["João 1", "Números 21-22"] },
        { day: 27, readings: ["João 2-3", "Números 23"] },
        { day: 28, readings: ["João 4", "Números 24-25"] },
        { day: 29, readings: ["João 5", "Números 26"] },
        { day: 30, readings: ["João 6", "Números 27-28"] },
        { day: 31, readings: ["João 7", "Números 29-30"] }
    ],
    "Abril": [
        { day: 1, readings: ["João 8", "Números 31-32"] },
        { day: 2, readings: ["João 9", "Números 33-34"] },
        { day: 3, readings: ["João 10", "Números 35-36"] },
        { day: 4, readings: ["João 11", "Deuteronômio 1-2"] },
        { day: 5, readings: ["João 12", "Deuteronômio 3-4"] },
        { day: 6, readings: ["João 13-14", "Deuteronômio 5-6"] },
        { day: 7, readings: ["João 15-16", "Deuteronômio 7-8"] },
        { day: 8, readings: ["João 17", "Deuteronômio 9-10"] },
        { day: 9, readings: ["João 18", "Deuteronômio 11-12"] },
        { day: 10, readings: ["João 19", "Deuteronômio 13-14"] },
        { day: 11, readings: ["João 20-21", "Deuteronômio 15-16"] },
        { day: 12, readings: ["Hebreus 1-2", "Deuteronômio 17-18"] },
        { day: 13, readings: ["Hebreus 3-4", "Deuteronômio 19-20"] },
        { day: 14, readings: ["Hebreus 5-6", "Deuteronômio 21-22"] },
        { day: 15, readings: ["Hebreus 7-8", "Deuteronômio 23-25"] },
        { day: 16, readings: ["Hebreus 9-10", "Deuteronômio 26-27"] },
        { day: 17, readings: ["Hebreus 11", "Deuteronômio 28"] },
        { day: 18, readings: ["Hebreus 12-13", "Deuteronômio 29-30"] },
        { day: 19, readings: ["Atos 1-2", "Deuteronômio 31"] },
        { day: 20, readings: ["Atos 3-4", "Deuteronômio 32"] },
        { day: 21, readings: ["Atos 5-6", "Deuteronômio 33-34"] },
        { day: 22, readings: ["Atos 7", "Josué 1-2"] },
        { day: 23, readings: ["Atos 8", "Josué 3-5"] },
        { day: 24, readings: ["Atos 9", "Josué 6-7"] },
        { day: 25, readings: ["Atos 10", "Josué 8-9"] },
        { day: 26, readings: ["Atos 11-12", "Josué 10"] },
        { day: 27, readings: ["Atos 13-14", "Josué 11-12"] },
        { day: 28, readings: ["Atos 15", "Josué 13-14"] },
        { day: 29, readings: ["Atos 16", "Josué 15-16"] },
        { day: 30, readings: ["Atos 17-18", "Josué 17-18"] }
    ],
    "Maio": [
        { day: 1, readings: ["Atos 19", "Josué 19-20"] },
        { day: 2, readings: ["Atos 20", "Josué 21-22"] },
        { day: 3, readings: ["Atos 21-22", "Josué 23-24"] },
        { day: 4, readings: ["Atos 23", "Juízes 1-2"] },
        { day: 5, readings: ["Atos 24-25", "Juízes 3-4"] },
        { day: 6, readings: ["Atos 26", "Juízes 5-6"] },
        { day: 7, readings: ["Atos 27", "Juízes 7-8"] },
        { day: 8, readings: ["Atos 28", "Juízes 9-10"] },
        { day: 9, readings: ["1Coríntios 1", "Juízes 11-12"] },
        { day: 10, readings: ["1Coríntios 2-3", "Juízes 13-14"] },
        { day: 11, readings: ["1Coríntios 4-6", "Juízes 15-16"] },
        { day: 12, readings: ["1Coríntios 7", "Juízes 17-18"] },
        { day: 13, readings: ["1Coríntios 8-9", "Juízes 19-20"] },
        { day: 14, readings: ["1Coríntios 10", "Juízes 21"] },
        { day: 15, readings: ["1Coríntios 11", "Rute 1-2"] },
        { day: 16, readings: ["1Coríntios 12-13", "Rute 3-4"] },
        { day: 17, readings: ["1Coríntios 14", "1Samuel 1-2"] },
        { day: 18, readings: ["1Coríntios 15", "1Samuel 3-4"] },
        { day: 19, readings: ["1Coríntios 16", "1Samuel 5-7"] },
        { day: 20, readings: ["2Coríntios 1-2", "1Samuel 8-10"] },
        { day: 21, readings: ["2Coríntios 3-4", "1Samuel 11-12"] },
        { day: 22, readings: ["2Coríntios 5-6", "1Samuel 13-14"] },
        { day: 23, readings: ["2Coríntios 7-8", "1Samuel 15-16"] },
        { day: 24, readings: ["2Coríntios 9-10", "1Samuel 17"] },
        { day: 25, readings: ["2Coríntios 11", "1Samuel 18-19"] },
        { day: 26, readings: ["2Coríntios 12-13", "1Samuel 20"] },
        { day: 27, readings: ["1Timóteo 1-2", "1Samuel 21-22"] },
        { day: 28, readings: ["1Timóteo 3-4", "1Samuel 23-24"] },
        { day: 29, readings: ["1Timóteo 5-6", "1Samuel 25"] },
        { day: 30, readings: ["2Timóteo 1-2", "1Samuel 26-27"] },
        { day: 31, readings: ["2Timóteo 3-4", "1Samuel 28-29"] }
    ],
    "Junho": [
        { day: 1, readings: ["Tito", "1Samuel 30-31"] },
        { day: 2, readings: ["Filemom", "2Samuel 1-2"] },
        { day: 3, readings: ["Tiago 1", "2Samuel 3-4"] },
        { day: 4, readings: ["Tiago 2", "2Samuel 5-6"] },
        { day: 5, readings: ["Tiago 3-4", "2Samuel 7-8"] },
        { day: 6, readings: ["Tiago 5", "2Samuel 9-10"] },
        { day: 7, readings: ["1Pedro 1", "2Samuel 11-12"] },
        { day: 8, readings: ["1Pedro 2-3", "2Samuel 13"] },
        { day: 9, readings: ["1Pedro 4-5", "2Samuel 14-15"] },
        { day: 10, readings: ["2Pedro 1", "2Samuel 16-17"] },
        { day: 11, readings: ["2Pedro 2", "2Samuel 18-19"] },
        { day: 12, readings: ["2Pedro 3", "2Samuel 20-21"] },
        { day: 13, readings: ["1João 1-2", "2Samuel 22"] },
        { day: 14, readings: ["1João 3", "2Samuel 23-24"] },
        { day: 15, readings: ["1João 4-5", "1Reis 1-2"] },
        { day: 16, readings: ["2 e 3João", "1Reis 3-4"] },
        { day: 17, readings: ["Judas", "1Reis 5-6"] },
        { day: 18, readings: ["Apocalipse 1", "1Reis 7-8"] },
        { day: 19, readings: ["Apocalipse 2-3", "1Reis 9"] },
        { day: 20, readings: ["Apocalipse 4-5", "1Reis 10-11"] },
        { day: 21, readings: ["Apocalipse 6", "1Reis 12-13"] },
        { day: 22, readings: ["Apocalipse 7-8", "1Reis 14-15"] },
        { day: 23, readings: ["Apocalipse 9-10", "1Reis 16-17"] },
        { day: 24, readings: ["Apocalipse 11-12", "1Reis 18-19"] },
        { day: 25, readings: ["Apocalipse 13-14", "1Reis 20-21"] },
        { day: 26, readings: ["Apocalipse 15-16", "1Reis 22"] },
        { day: 27, readings: ["Apocalipse 17", "2Reis 1-2"] },
        { day: 28, readings: ["Apocalipse 18", "2Reis 3-4"] },
        { day: 29, readings: ["Apocalipse 19-20", "2Reis 5-6"] },
        { day: 30, readings: ["Apocalipse 22", "2Reis 7-8"] }
    ],
    "Julho": [
        { day: 1, readings: ["Mateus 1-2", "2Reis 9-10"] },
        { day: 2, readings: ["Mateus 3-4", "2Reis 11-12"] },
        { day: 3, readings: ["Mateus 5", "2Reis 13-15"] },
        { day: 4, readings: ["Mateus 6", "2Reis 16-17"] },
        { day: 5, readings: ["Mateus 7", "2Reis 18-20"] },
        { day: 6, readings: ["Mateus 8", "2Reis 21-23"] },
        { day: 7, readings: ["Mateus 9", "2Reis 24-25"] },
        { day: 8, readings: ["Mateus 10", "1Crônicas 1-2"] },
        { day: 9, readings: ["Mateus 11", "1Crônicas 3-4"] },
        { day: 10, readings: ["Mateus 12", "1Crônicas 5-6"] },
        { day: 11, readings: ["Mateus 13", "1Crônicas 7-8"] },
        { day: 12, readings: ["Mateus 14", "1Crônicas 9-10"] },
        { day: 13, readings: ["Mateus 15", "1Crônicas 11-12"] },
        { day: 14, readings: ["Mateus 16-17", "1Crônicas 13-15"] },
        { day: 15, readings: ["Mateus 18", "1Crônicas 16-17"] },
        { day: 16, readings: ["Mateus 19-20", "1Crônicas 18-20"] },
        { day: 17, readings: ["Mateus 21", "1Crônicas 21-22"] },
        { day: 18, readings: ["Mateus 22", "1Crônicas 23-25"] },
        { day: 19, readings: ["Mateus 23", "1Crônicas 26-27"] },
        { day: 20, readings: ["Mateus 24", "1Crônicas 28-29"] },
        { day: 21, readings: ["Mateus 25", "2Crônicas 1-4"] },
        { day: 22, readings: ["Mateus 26", "2Crônicas 5-7"] },
        { day: 23, readings: ["Mateus 27", "2Crônicas 8-9"] },
        { day: 24, readings: ["Mateus 28", "2Crônicas 10-12"] },
        { day: 25, readings: ["Romanos 1", "2Crônicas 13-15"] },
        { day: 26, readings: ["Romanos 2", "2Crônicas 16-18"] },
        { day: 27, readings: ["Romanos 3", "2Crônicas 19-21"] },
        { day: 28, readings: ["Romanos 4-5", "2Crônicas 22-24"] },
        { day: 29, readings: ["Romanos 6-7", "2Crônicas 25-26"] },
        { day: 30, readings: ["Romanos 8", "2Crônicas 27-28"] },
        { day: 31, readings: ["Romanos 9", "2Crônicas 29-30"] }
    ],
    "Agosto": [
        { day: 1, readings: ["Romanos 10-11", "2Crônicas 30-31"] },
        { day: 2, readings: ["Romanos 12-13", "2Crônicas 32-33"] },
        { day: 3, readings: ["Romanos 14-15", "2Crônicas 34-36"] },
        { day: 4, readings: ["Romanos 16", "Esdras 1-2"] },
        { day: 5, readings: ["Marcos 1", "Esdras 3-5"] },
        { day: 6, readings: ["Marcos 2-3", "Esdras 6-7"] },
        { day: 7, readings: ["Marcos 4", "Esdras 8-10"] },
        { day: 8, readings: ["Marcos 5", "Neemias 1-3"] },
        { day: 9, readings: ["Marcos 6", "Neemias 4-6"] },
        { day: 10, readings: ["Marcos 7", "Neemias 7"] },
        { day: 11, readings: ["Marcos 8", "Neemias 8-9"] },
        { day: 12, readings: ["Marcos 9", "Neemias 10-11"] },
        { day: 13, readings: ["Marcos 10", "Neemias 12-13"] },
        { day: 14, readings: ["Marcos 11-12", "Ester 1-3"] },
        { day: 15, readings: ["Marcos 13", "Ester 4-6"] },
        { day: 16, readings: ["Marcos 14", "Ester 7-10"] },
        { day: 17, readings: ["Marcos 15-16", "Jó 1-3"] },
        { day: 18, readings: ["Gálatas 1-2", "Jó 4-5"] },
        { day: 19, readings: ["Gálatas 3-4", "Jó 6-7"] },
        { day: 20, readings: ["Gálatas 5-6", "Jó 8-10"] },
        { day: 21, readings: ["Efésios 1-2", "Jó 11-14"] },
        { day: 22, readings: ["Efésios 3-4", "Jó 15-17"] },
        { day: 23, readings: ["Efésios 5-6", "Jó 18-19"] },
        { day: 24, readings: ["Filipenses 1-2", "Jó 20-21"] },
        { day: 25, readings: ["Filipenses 3-4", "Jó 22-24"] },
        { day: 26, readings: ["Lucas 1", "Jó 25-28"] },
        { day: 27, readings: ["Lucas 2", "Jó 29-31"] },
        { day: 28, readings: ["Lucas 3", "Jó 32-34"] },
        { day: 29, readings: ["Lucas 4", "Jó 35-37"] },
        { day: 30, readings: ["Lucas 5", "Jó 38-39"] },
        { day: 31, readings: ["Lucas 6", "Jó 40-42"] }
    ],
    "Setembro": [
        { day: 1, readings: ["Lucas 7", "Salmos 1-5"] },
        { day: 2, readings: ["Lucas 8", "Salmos 6-10"] },
        { day: 3, readings: ["Lucas 9", "Salmos 11-15"] },
        { day: 4, readings: ["Lucas 10", "Salmos 16-18"] },
        { day: 5, readings: ["Lucas 11", "Salmos 19-22"] },
        { day: 6, readings: ["Lucas 12", "Salmos 23-26"] },
        { day: 7, readings: ["Lucas 13-14", "Salmos 27-30"] },
        { day: 8, readings: ["Lucas 15-16", "Salmos 31-34"] },
        { day: 9, readings: ["Lucas 17", "Salmos 35-37"] },
        { day: 10, readings: ["Lucas 18", "Salmos 38-41"] },
        { day: 11, readings: ["Lucas 19", "Salmos 42-45"] },
        { day: 12, readings: ["Lucas 20", "Salmos 46-49"] },
        { day: 13, readings: ["Lucas 21", "Salmos 50-53"] },
        { day: 14, readings: ["Lucas 22", "Salmos 54-57"] },
        { day: 15, readings: ["Lucas 23", "Salmos 58-61"] },
        { day: 16, readings: ["Lucas 24", "Salmos 62-65"] },
        { day: 17, readings: ["Colossenses 1-2", "Salmos 66-68"] },
        { day: 18, readings: ["Colossenses 3-4", "Salmos 69-71"] },
        { day: 19, readings: ["1Tessalonicenses 1-2", "Salmos 72-74"] },
        { day: 20, readings: ["1Tessalonicenses 3-4", "Salmos 75-77"] },
        { day: 21, readings: ["1Tessalonicenses 5", "Salmos 78-79"] },
        { day: 22, readings: ["2Tessalonicenses 1-3", "Salmos 80-83"] },
        { day: 23, readings: ["João 1", "Salmos 84-87"] },
        { day: 24, readings: ["João 2-3", "Salmos 88-90"] },
        { day: 25, readings: ["João 4", "Salmos 91-94"] },
        { day: 26, readings: ["João 5", "Salmos 95-99"] },
        { day: 27, readings: ["João 6", "Salmos 100-103"] },
        { day: 28, readings: ["João 7", "Salmos 104-106"] },
        { day: 29, readings: ["João 8", "Salmos 107-109"] },
        { day: 30, readings: ["João 9", "Salmos 110-114"] }
    ],
    "Outubro": [
        { day: 1, readings: ["João 10", "Salmos 115-118"] },
        { day: 2, readings: ["João 11", "Salmos 119"] },
        { day: 3, readings: ["João 12", "Salmos 120-126"] },
        { day: 4, readings: ["João 13-14", "Salmos 127-132"] },
        { day: 5, readings: ["João 15-16", "Salmos 133-136"] },
        { day: 6, readings: ["João 17", "Salmos 137-140"] },
        { day: 7, readings: ["João 18", "Salmos 141-145"] },
        { day: 8, readings: ["João 19", "Salmos 146-150"] },
        { day: 9, readings: ["João 20-21", "Provérbios 1-3"] },
        { day: 10, readings: ["Hebreus 1-2", "Provérbios 4-6"] },
        { day: 11, readings: ["Hebreus 3-4", "Provérbios 7-9"] },
        { day: 12, readings: ["Hebreus 5-6", "Provérbios 10-12"] },
        { day: 13, readings: ["Hebreus 7-8", "Provérbios 13-15"] },
        { day: 14, readings: ["Hebreus 9-10", "Provérbios 16-18"] },
        { day: 15, readings: ["Hebreus 11", "Provérbios 19-21"] },
        { day: 16, readings: ["Hebreus 12-13", "Provérbios 22-24"] },
        { day: 17, readings: ["Atos 1-2", "Provérbios 25-27"] },
        { day: 18, readings: ["Atos 3-4", "Provérbios 28-29"] },
        { day: 19, readings: ["Atos 5-6", "Provérbios 30-31"] },
        { day: 20, readings: ["Atos 7", "Eclesiastes 1-3"] },
        { day: 21, readings: ["Atos 8", "Eclesiastes 4-6"] },
        { day: 22, readings: ["Atos 9", "Eclesiastes 7-9"] },
        { day: 23, readings: ["Atos 10", "Eclesiastes 10-12"] },
        { day: 24, readings: ["Atos 11-12", "Cantares 1-4"] },
        { day: 25, readings: ["Atos 13-14", "Cantares 5-8"] },
        { day: 26, readings: ["Atos 15", "Isaías 1-3"] },
        { day: 27, readings: ["Atos 16", "Isaías 4-7"] },
        { day: 28, readings: ["Atos 17-18", "Isaías 8-9"] },
        { day: 29, readings: ["Atos 19", "Isaías 10-12"] },
        { day: 30, readings: ["Atos 20", "Isaías 13-16"] },
        { day: 31, readings: ["Atos 21-22", "Isaías 17-19"] }
    ],
    "Novembro": [
        { day: 1, readings: ["Atos 23", "Isaías 20-24"] },
        { day: 2, readings: ["Atos 24-25", "Isaías 25-27"] },
        { day: 3, readings: ["Atos 26", "Isaías 28-31"] },
        { day: 4, readings: ["Atos 27", "Isaías 32-35"] },
        { day: 5, readings: ["Atos 28", "Isaías 36-39"] },
        { day: 6, readings: ["1Coríntios 1", "Isaías 40-43"] },
        { day: 7, readings: ["1Coríntios 2-3", "Isaías 44-46"] },
        { day: 8, readings: ["1Coríntios 4-6", "Isaías 47-49"] },
        { day: 9, readings: ["1Coríntios 7", "Isaías 50-53"] },
        { day: 10, readings: ["1Coríntios 8-9", "Isaías 54-57"] },
        { day: 11, readings: ["1Coríntios 10", "Isaías 58-61"] },
        { day: 12, readings: ["1Coríntios 11", "Isaías 62-66"] },
        { day: 13, readings: ["1Coríntios 12-13", "Jeremias 1-3"] },
        { day: 14, readings: ["1Coríntios 14", "Jeremias 4-7"] },
        { day: 15, readings: ["1Coríntios 15", "Jeremias 8-11"] },
        { day: 16, readings: ["1Coríntios 16", "Jeremias 12-15"] },
        { day: 17, readings: ["2Coríntios 1-2", "Jeremias 16-18"] },
        { day: 18, readings: ["2Coríntios 3-4", "Jeremias 19-21"] },
        { day: 19, readings: ["2Coríntios 5-6", "Jeremias 22-23"] },
        { day: 20, readings: ["2Coríntios 7-8", "Jeremias 24-26"] },
        { day: 21, readings: ["2Coríntios 9-10", "Jeremias 27-29"] },
        { day: 22, readings: ["2Coríntios 11", "Jeremias 30-32"] },
        { day: 23, readings: ["2Coríntios 12-13", "Jeremias 33-35"] },
        { day: 24, readings: ["1Timóteo 1-2", "Jeremias 36-38"] },
        { day: 25, readings: ["1Timóteo 3-4", "Jeremias 39-41"] },
        { day: 26, readings: ["1Timóteo 5-6", "Jeremias 42-43"] },
        { day: 27, readings: ["2Timóteo 1-2", "Jeremias 44-45"] },
        { day: 28, readings: ["2Timóteo 3-4", "Jeremias 46-48"] },
        { day: 29, readings: ["Tito", "Jeremias 49-50"] },
        { day: 30, readings: ["Filemom", "Jeremias 51-52"] }
    ],
    "Dezembro": [
        { day: 1, readings: ["Tiago 1", "Lamentações 1-5"] },
        { day: 2, readings: ["Tiago 2", "Ezequiel 1-3"] },
        { day: 3, readings: ["Tiago 3", "Ezequiel 4-7"] },
        { day: 4, readings: ["Tiago 4", "Ezequiel 8-11"] },
        { day: 5, readings: ["Tiago 5", "Ezequiel 12-14"] },
        { day: 6, readings: ["1Pedro 1", "Ezequiel 15-16"] },
        { day: 7, readings: ["1Pedro 2", "Ezequiel 17-19"] },
        { day: 8, readings: ["1Pedro 3", "Ezequiel 20-22"] },
        { day: 9, readings: ["1Pedro 4", "Ezequiel 23-25"] },
        { day: 10, readings: ["1Pedro 5", "Ezequiel 26-28"] },
        { day: 11, readings: ["2Pedro 1", "Ezequiel 29-32"] },
        { day: 12, readings: ["2Pedro 2", "Ezequiel 33-36"] },
        { day: 13, readings: ["2Pedro 3", "Ezequiel 37-40"] },
        { day: 14, readings: ["1João 1-2", "Ezequiel 41-44"] },
        { day: 15, readings: ["1João 3", "Ezequiel 45-48"] },
        { day: 16, readings: ["1João 4-5", "Daniel 1-4"] },
        { day: 17, readings: ["2 e 3João", "Daniel 5-8"] },
        { day: 18, readings: ["Judas", "Daniel 9-12"] },
        { day: 19, readings: ["Apocalipse 1", "Oseias 1-7"] },
        { day: 20, readings: ["Apocalipse 2", "Oseias 8-14"] },
        { day: 21, readings: ["Apocalipse 3-4", "Joel 1-3"] },
        { day: 22, readings: ["Apocalipse 5-6", "Amós 1-5"] },
        { day: 23, readings: ["Apocalipse 7-8", "Amós 6-9"] },
        { day: 24, readings: ["Apocalipse 9-10", "Obadias 1", "Jonas 1-4"] },
        { day: 25, readings: ["Apocalipse 11-12", "Miqueias 1-7"] },
        { day: 26, readings: ["Apocalipse 13-14", "Naum 1-3", "Habacuque 1-3"] },
        { day: 27, readings: ["Apocalipse 15-17", "Sofonias 1-3", "Ageu 1-2"] },
        { day: 28, readings: ["Apocalipse 18", "Zacarias 1-5"] },
        { day: 29, readings: ["Apocalipse 19-20", "Zacarias 6-10"] },
        { day: 30, readings: ["Apocalipse 21", "Zacarias 11-14"] },
        { day: 31, readings: ["Apocalipse 22", "Malaquias 1-4"] }
    ],
};

const biblePlans = {
    "icppg_2026": {
        name: "Plano ICPPG 2026",
        description: "Plano oficial da Igreja Cristã Pentecostal Porta da Glória",
        data: convertFixedPlanToArray(readingPlan_ICPPG),
        isFlexible: false
    },
    "kids_jovens": {
        name: "Plano Kids/Jovens",
        description: "Histórias de Jesus com leituras curtas e dinâmicas",
        data: generateKidsPlan(),
        isFlexible: true
    },
    "proverbios_31": {
        name: "Provérbios em 31 dias",
        description: "1 capítulo por dia",
        data: generateProverbsPlan(),
        isFlexible: true
    },
    "old_testament": {
        name: "Antigo Testamento",
        description: "39 livros do AT em 6 meses",
        data: generateOldTestamentPlan(),
        isFlexible: true
    },
    "new_testament": {
        name: "Novo Testamento",
        description: "27 livros do NT em 3 meses",
        data: generateNewTestamentPlan(),
        isFlexible: true
    },
    "maratona_180": {
        name: "Maratona 180 Dias",
        description: "Bíblia completa em 6 meses (ritmo moderado)",
        data: generateMarathon180Plan(),
        isFlexible: true
    },
    "maratona_120": {
        name: "Maratona 120 Dias",
        description: "Toda a Bíblia em 4 meses (Alta Intensidade)",
        data: generateMarathonPlan(),
        isFlexible: true
    },
    "canonical": {
        name: "Gênesis ao Apocalipse",
        description: "Leitura da Bíblia na ordem tradicional em 1 ano",
        data: generateCanonicalPlan(),
        isFlexible: true
    },
    "chronological": {
        name: "Ordem Cronológica",
        description: "Bíblia na ordem dos acontecimentos históricos",
        data: generateChronologicalPlan(),
        isFlexible: true
    }
};

const activeReadingPlan = biblePlans[currentPlanId].data || biblePlans["icppg_2026"].data;

// Language Switching Logic
function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('bibliaLang', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    updateTexts();
    updateUI();
}

// Update all static text elements
function updateTexts() {
    const t = translations[currentLang];
    const pt = translations['pt'] || {}; // Fallback source

    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        } else if (pt[key]) {
            // Fallback to PT if key is missing in target language
            el.textContent = pt[key];
        }
    });

    // Update buttons in Month View if visible
    const markBtn = document.querySelector('.mark-month-btn');
    if (markBtn) markBtn.textContent = t['mark_all'];
    const unmarkBtn = document.querySelector('.unmark-month-btn');
    if (unmarkBtn) unmarkBtn.textContent = t['unmark_all'];
}

// Helper: Translate Book Name
function translateBook(bookCode) {
    const t = translations[currentLang];
    if (t.books && t.books[bookCode]) {
        return t.books[bookCode];
    }
    return bookCode; // Fallback to original if not found
}

// Helper: Format Reading String (e.g., "Gênesis 1-2" -> "Gen 1-2")
function formatReadingDisplay(readingStr) {
    // Parse the reading string to find book and chapters
    // Regex matches "BookName Chaps" or "BookName"
    // We assume the book code is the first part (e.g., "Gênesis")

    // Simple approach: split by space, translate first part if it matches a book code
    const parts = readingStr.split(' ');
    if (parts.length > 0) {
        let book = parts[0];
        // Handle "1 Sm" -> "1Samuel" normalization if needed, similar to parseReading logic
        // But internal data usually has compact codes "Gênesis", "1Samuel"

        // Check if there are multiple readings e.g., "Obadias 1, Jonas 1-4" - this is harder.
        // Let's rely on `parseReading` structure but we just want to replace the book names in the string.

        // Better Strategy: RegExp Replace all known book codes
        // Sort keys by length descending to avoid partial matches (though keys are short)

        // Actually, internal strings are "Gênesis 1-2". We can just replace the book code.
        const translatedBook = translateBook(book);
        if (translatedBook !== book) {
            return readingStr.replace(book, translatedBook);
        }
    }
    return readingStr;
}

// Global Progress Object (Loaded once and updated)
let userProgress = {};

function loadGlobalProgress() {
    const data = localStorage.getItem(getStorageKey());
    userProgress = data ? JSON.parse(data) : {};

    // Migration: If we have data in the old church plan key but none in the new one (if they somehow split)
    if (currentPlanId === 'icppg_2026') {
        const legacyData = localStorage.getItem('bibliaProgress'); // Same as getStorageKey() now
        if (legacyData && !data) {
            userProgress = JSON.parse(legacyData);
        }
    }
}
loadGlobalProgress();

// Plan Utility Functions
function isPlanStarted(planId = currentPlanId) {
    const plan = biblePlans[planId];
    if (!plan || !plan.isFlexible) return true;
    if (localStorage.getItem(`bibliaStart_${planId}`)) return true;
    // If user already has marked readings in this plan (legacy progress), treat as started
    const progress = getProgress();
    return Object.keys(progress).length > 0;
}

function startPlanToday() {
    const now = new Date();
    const localDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    localStorage.setItem(`bibliaStart_${currentPlanId}`, localDate);
    localStorage.removeItem('lateBannerDismissedUntil');
    updateUI();
}

function getPlanDayIndex() {
    const plan = biblePlans[currentPlanId];
    if (!plan.isFlexible) {
        // Fixed: Day of current year
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay) - 1; // 0-based
    } else {
        // Flexible: Days since starting
        let startStr = localStorage.getItem(`bibliaStart_${currentPlanId}`);
        if (!startStr) {
            return 0; // Not started yet (or legacy without start date): show Day 1
        }
        const [y, m, d] = startStr.split('-').map(Number);
        if (isNaN(y) || isNaN(m) || isNaN(d)) return 0;

        const startDate = new Date(y, m - 1, d);
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
        const maxIdx = Math.max(0, plan.data.length - 1);
        return Math.max(0, Math.min(diffDays, maxIdx));
    }
}

// HELPER: Flexible Month Logic (30/31 alternating)
function getFlexibleMonthDays() {
    // Returns array of day counts for each month
    // Pattern: 30, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30, 30 = 365
    return [30, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30, 30];
}

function getMonthStartIndices() {
    const days = getFlexibleMonthDays();
    const indices = [0];
    let sum = 0;
    for (let d of days) {
        sum += d;
        indices.push(sum);
    }
    return indices; // [0, 30, 61, 91, ...] -> last one is 365
}

function getFlexibleMonthRange(monthIdx) {
    // Returns { start, end, length }
    if (currentPlanId === 'proverbios_31') return { start: 0, end: 31, length: 31 };

    const indices = getMonthStartIndices();
    const start = indices[monthIdx] || 0;
    const end = indices[monthIdx + 1] || indices[indices.length - 1]; // Fallback
    return { start, end, length: end - start };
}

function getFlexibleDayInfo(globalIdx) {
    // Given a global day index (0-based), find month index and day-in-month
    if (currentPlanId === 'proverbios_31') return { monthIdx: 0, monthNum: 1, dayInMonth: globalIdx + 1, monthLabel: 'Provérbios' };

    const indices = getMonthStartIndices();
    let monthIdx = 0;
    for (let i = 0; i < indices.length - 1; i++) {
        // If globalIdx is within [current, next)
        if (globalIdx >= indices[i] && globalIdx < indices[i + 1]) {
            monthIdx = i;
            break;
        }
    }

    // Handle overflow (days beyond 365 or if loop finishes)
    if (globalIdx >= indices[indices.length - 1]) {
        monthIdx = 11; // Cap at month 12 (index 11)
    }

    const startIdx = indices[monthIdx];
    const dayInMonth = globalIdx - startIdx + 1;

    return { monthIdx, monthNum: monthIdx + 1, dayInMonth, monthLabel: `Mês ${monthIdx + 1}` };
}

function getPlanDisplayMonths() {
    const plan = biblePlans[currentPlanId];
    if (!plan.isFlexible) return monthNames;

    // Return appropriate number of months based on plan duration
    if (currentPlanId === 'proverbios_31') return ["Mês 1"];
    if (currentPlanId === 'new_testament' || currentPlanId === 'kids_jovens') return ["Mês 1", "Mês 2", "Mês 3"];
    if (currentPlanId === 'maratona_120') return ["Mês 1", "Mês 2", "Mês 3", "Mês 4"];
    if (currentPlanId === 'old_testament' || currentPlanId === 'maratona_180') {
        return ["Mês 1", "Mês 2", "Mês 3", "Mês 4", "Mês 5", "Mês 6"];
    }

    // Default: 12 months for 365-day plans
    return ["Mês 1", "Mês 2", "Mês 3", "Mês 4", "Mês 5", "Mês 6", "Mês 7", "Mês 8", "Mês 9", "Mês 10", "Mês 11", "Mês 12"];
}

function getReadingsForMonth(monthName) {
    const plan = biblePlans[currentPlanId];
    const data = plan.data;
    const months = getPlanDisplayMonths();
    const monthIdx = months.indexOf(monthName);

    // Special handling for Proverbs 31-day plan
    if (currentPlanId === 'proverbios_31') {
        return data; // Return all 31 days
    }

    // Group 365 days into 12 months (roughly 30-31 days each)
    const daysInMonth = (monthName === "Fevereiro" && !plan.isFlexible) ? 28 :
        (["Abril", "Junho", "Setembro", "Novembro"].includes(monthName) && !plan.isFlexible) ? 30 :
            (!plan.isFlexible) ? 31 : 30; // Flexible uses strict 30-day blocks for simplicity

    // For fixed plans, we should align exactly with calendar
    if (!plan.isFlexible) {
        const startIdx = monthNames.slice(0, monthIdx).reduce((acc, m) => acc + (readingPlan_ICPPG[m]?.length || 0), 0);
        return data.slice(startIdx, startIdx + (readingPlan_ICPPG[monthName]?.length || 0));
    } else {
        const { start, end } = getFlexibleMonthRange(monthIdx);
        // If it's the last month, take everything remaining (handles 365 days vs 360)
        if (monthIdx === months.length - 1) {
            return data.slice(start);
        }
        return data.slice(start, end);
    }
}

// LocalStorage key
const STORAGE_KEY = 'bibliaProgress';

// Get progress from the pre-loaded global object
function getProgress() {
    return userProgress;
}

// Save progress to localStorage and update global object
function saveProgress(progress) {
    userProgress = progress;
    localStorage.setItem(getStorageKey(), JSON.stringify(progress));
}

// Get today's date info for calendar
function getTodayInfo() {
    const now = new Date();
    const month = monthNames[now.getMonth()];
    const day = now.getDate();
    return { month, day };
}

// Helper to get the correct storage key for a reading (prevents progress loss)
function getReadingKey(month, dayIdx, readingIndex) {
    const plan = biblePlans[currentPlanId];
    const dayData = plan.data[dayIdx];

    if (!dayData) return `unknown-${dayIdx}`;

    // BACKWARD COMPATIBILITY: Force use of original month/day for Fixed Plans
    if (!plan.isFlexible && dayData.originalMonth && dayData.originalDay) {
        return `${dayData.originalMonth}-${dayData.originalDay}-${readingIndex}`;
    }

    // Flexible plans use the relative month and global index
    return `${month}-${dayIdx}-${readingIndex}`;
}

// Check if a reading is completed
function isReadingCompleted(month, dayIdx, readingIndex) {
    const progress = getProgress();

    // Check for new key format first
    const key = getReadingKey(month, dayIdx, readingIndex);
    if (progress[key]) return true;

    // COMPATIBILITY: Check for legacy key (old 30-day fixed blocks)
    // Only needed for flexible plans that use the "Month X" format
    if (biblePlans[currentPlanId].isFlexible && !month.startsWith('Provérbios')) {
        const legacyMonthNum = Math.floor(dayIdx / 30) + 1;
        const legacyMonth = `Mês ${legacyMonthNum}`;
        const legacyKey = `${legacyMonth}-${dayIdx}-${readingIndex}`;
        if (progress[legacyKey]) return true;
    }

    return false;
}

// Toggle reading completion (Handles migration from legacy to new)
function toggleReading(month, dayIdx, readingIndex) {
    const progress = getProgress();
    const key = getReadingKey(month, dayIdx, readingIndex);

    // Check legacy key
    let legacyKey = null;
    if (biblePlans[currentPlanId].isFlexible && !month.startsWith('Provérbios')) {
        const legacyMonthNum = Math.floor(dayIdx / 30) + 1;
        const legacyMonth = `Mês ${legacyMonthNum}`;
        legacyKey = `${legacyMonth}-${dayIdx}-${readingIndex}`;
    }

    // Determine current state (checking both)
    const isCompleted = progress[key] || (legacyKey && progress[legacyKey]);

    if (isCompleted) {
        // If unchecking: Remove BOTH keys to ensure it clears
        delete progress[key];
        if (legacyKey) delete progress[legacyKey];
        // Reset the dismissed banner state so it reappears immediately if they uncheck an old reading
        localStorage.removeItem('lateBannerDismissedUntil');
    } else {
        // If checking: Save ONLY the new key
        progress[key] = true;
        
        // Set start date if it's a flexible plan and hasn't been started yet
        if (biblePlans[currentPlanId].isFlexible && !localStorage.getItem(`bibliaStart_${currentPlanId}`)) {
            const now = new Date();
            const localDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
            localStorage.setItem(`bibliaStart_${currentPlanId}`, localDate);
        }
    }

    saveProgress(progress);
    updateUI();
    checkMonthCompletion(month);
}

// Get display info for today
function getDisplayToday() {
    const plan = biblePlans[currentPlanId];
    const dayIdx = getPlanDayIndex();
    const now = new Date();

    if (!plan.isFlexible) {
        const month = monthNames[now.getMonth()];
        const dayInMonth = now.getDate();
        return { label: `${dayInMonth} de ${month}`, month, dayIdx };
    } else {
        // For flexible plans: dayIdx is 0-based (0 = first day)
        // Convert to 1-based for display

        let displayDay, monthNum, monthLabel;

        if (currentPlanId === 'proverbios_31') {
            displayDay = dayIdx + 1;
            monthNum = 1;
            monthLabel = 'Provérbios'; // Use custom label directly
            // Ensure we don't go out of bounds if user is past day 31
            if (displayDay > 31) displayDay = 31;
        } else {
            const info = getFlexibleDayInfo(dayIdx);
            displayDay = info.dayInMonth;
            monthNum = info.monthNum;
            monthLabel = info.monthLabel;
        }

        return { label: `Dia ${displayDay} de ${monthLabel}`, month: (currentPlanId === 'proverbios_31' ? 'Mês 1' : `Mês ${monthNum}`), dayIdx };
    }
}



// Switch between reading plans
function switchPlan(planId) {
    if (!biblePlans[planId]) return;

    if (!biblePlans[planId].data && planId !== 'icppg_2026') {
        alert("Este plano estará disponível em breve!");
        return;
    }

    currentPlanId = planId;
    localStorage.setItem('bibliaCurrentPlan', planId);

    window.location.reload();
}

// Calculate statistics - Independent of string splitting (robust)
function calculateStats() {
    const progress = getProgress();
    const totalDays = activeReadingPlan.length;
    let daysCompletedCount = 0;

    activeReadingPlan.forEach((dayData, globalIdx) => {
        // Special handling for Proverbs 31-day plan
        let monthNum, month;
        if (currentPlanId === 'proverbios_31') {
            monthNum = 1; // All 31 days are in Month 1
            month = 'Mês 1';
        } else {
            const info = getFlexibleDayInfo(globalIdx);
            month = biblePlans[currentPlanId].isFlexible ? info.monthLabel : dayData.originalMonth;
        }

        const isDayDone = dayData.readings.length > 0 && dayData.readings.every((_, rIdx) => {
            const key = getReadingKey(month, globalIdx, rIdx);
            return !!progress[key];
        });

        if (isDayDone) daysCompletedCount++;
    });

    const percentage = Math.round((daysCompletedCount / totalDays) * 100);

    return {
        daysCompleted: daysCompletedCount,
        totalDays,
        percentage
    };
}


// Helper to parse reading string (e.g., "Gênesis 1-2", "Obadias e Jonas", "2 e 3João")
function parseReading(readingStr) {
    const results = [];

    // Special case for "2 e 3João"
    if (readingStr.includes("2 e 3João")) {
        return [
            { book: "2João", start: 1, end: 1 },
            { book: "3João", start: 1, end: 1 }
        ];
    }

    // Split by " e " or "," for multiple books (e.g., "Obadias e Jonas")
    const parts = readingStr.split(/\s+e\s+|\s*,\s*/);

    parts.forEach(part => {
        const match = part.trim().match(/^(.+?)(?:\s+([0-9]+)(?:-([0-9]+))?)?$/);

        let bookRaw, start, end;
        if (!match) {
            bookRaw = part.trim();
            start = null;
            end = null;
        } else {
            bookRaw = match[1].trim();
            start = match[2] ? parseInt(match[2]) : null;
            end = match[3] ? parseInt(match[3]) : null;
        }

        let book = bookRaw.replace(/\s+/g, ''); // Normalize "1 Sm" to "1Samuel"

        // Aliases and Normalization
                const aliases = {
            "Tito": "Tito", "Filemom": "Filemom", "Judas": "Judas", "Joel": "Joel",
            "Miqueias": "Miqueias", "Malaquias": "Malaquias", "Êxodo": "Êxodo",
            "Gn": "Gênesis", "Êx": "Êxodo", "Lv": "Levítico", "Nm": "Números", "Dt": "Deuteronômio", "Js": "Josué", "Jz": "Juízes", "Rt": "Rute", "1Sm": "1Samuel", "2Sm": "2Samuel", "1Rs": "1Reis", "2Rs": "2Reis", "1Cr": "1Crônicas", "2Cr": "2Crônicas", "Ed": "Esdras", "Ne": "Neemias", "Et": "Ester", "Jó": "Jó", "Sl": "Salmos", "Pv": "Provérbios", "Ec": "Eclesiastes", "Ct": "Cantares", "Is": "Isaías", "Jr": "Jeremias", "Lm": "Lamentações", "Ez": "Ezequiel", "Dn": "Daniel", "Os": "Oseias", "Jl": "Joel", "Am": "Amós", "Obadias": "Obadias", "Jn": "Jonas", "Mq": "Miqueias", "Naum": "Naum", "Habacuque": "Habacuque", "Sofonias": "Sofonias", "Ageu": "Ageu", "Zacarias": "Zacarias", "Malaquias": "Malaquias",
            "Mt": "Mateus", "Mc": "Marcos", "Lc": "Lucas", "Jo": "João", "At": "Atos", "Rm": "Romanos", "1Co": "1Coríntios", "2Co": "2Coríntios", "Gl": "Gálatas", "Ef": "Efésios", "Fp": "Filipenses", "Cl": "Colossenses", "1Ts": "1Tessalonicenses", "2Ts": "2Tessalonicenses", "1Tm": "1Timóteo", "2Tm": "2Timóteo", "Tt": "Tito", "Fm": "Filemom", "Hb": "Hebreus", "Tg": "Tiago", "1Pe": "1Pedro", "2Pe": "2Pedro", "1Jo": "1João", "2Jo": "2João", "3Jo": "3João", "Jd": "Judas", "Ap": "Apocalipse", "Ex": "Êxodo"
        };
        if (aliases[book]) book = aliases[book];

        results.push({ book, start, end });
    });

    return results;
}

// Calculate detailed Bible stats (Chapters and Books)
function calculateBibleDetailedStats() {
    const progress = getProgress();
    const readChapters = {}; // book: Set of chapter numbers

    // Initialize tracking for all 66 books
    Object.keys(bibleData).forEach(book => {
        readChapters[book] = new Set();
    });

    // Iterate through all readings in the plan
    activeReadingPlan.forEach((dayData, globalIdx) => {
        // Special handling for Proverbs 31-day plan
        let monthNum, flexMonth, month;
        if (currentPlanId === 'proverbios_31') {
            monthNum = 1;
            flexMonth = 'Mês 1';
            month = 'Mês 1';
        } else {
            const info = getFlexibleDayInfo(globalIdx);
            flexMonth = info.monthLabel;
            const fixedMonth = dayData.originalMonth;
            month = biblePlans[currentPlanId].isFlexible ? flexMonth : fixedMonth;
        }

        dayData.readings.forEach((readingStr, index) => {
            const key = getReadingKey(month, globalIdx, index);
            if (progress[key]) {
                const readings = parseReading(readingStr);
                readings.forEach(({ book, start, end }) => {
                    if (!readChapters[book]) return; // Skip unknown books

                    // Add chapters to set (handles overlaps and normalization)
                    if (start && end) {
                        for (let i = start; i <= end; i++) {
                            readChapters[book].add(i);
                        }
                    } else if (start) {
                        readChapters[book].add(start);
                    } else {
                        const totalInBook = bibleData[book];
                        if (totalInBook) {
                            for (let i = 1; i <= totalInBook; i++) {
                                readChapters[book].add(i);
                            }
                        }
                    }
                });
            }
        });
    });

    let chaptersReadTotal = 0;
    let booksCompletedTotal = 0;

    // Evaluate progress against canonical counts
    Object.keys(bibleData).forEach(book => {
        let chaptersRead = readChapters[book].size;
        const totalInBook = bibleData[book];

        // Safety cap: don't count more chapters than the book has (handles plan typos)
        if (chaptersRead > totalInBook) chaptersRead = totalInBook;

        chaptersReadTotal += chaptersRead;
        // A book is complete if user read at least all unique chapters
        if (chaptersRead >= totalInBook) {
            booksCompletedTotal++;
        }
    });

    // Get plan-specific totals
    const planTotals = getPlanTotals();
    const percentage = Math.round((chaptersReadTotal / planTotals.totalChapters) * 100);

    return {
        chaptersRead: chaptersReadTotal,
        totalChapters: planTotals.totalChapters,
        booksCompleted: booksCompletedTotal,
        totalBooks: planTotals.totalBooks,
        percentage: percentage
    };
}

// Calculate total chapters and books for the current plan
function getPlanTotals() {
    const planChapters = new Set();
    const planBooks = new Set();

    // Iterate through all readings in the current plan
    activeReadingPlan.forEach(dayData => {
        dayData.readings.forEach(readingStr => {
            const readings = parseReading(readingStr);
            readings.forEach(({ book, start, end }) => {
                if (!bibleData[book]) return; // Skip unknown books

                planBooks.add(book);

                // Add chapters to set
                if (start && end) {
                    for (let i = start; i <= end; i++) {
                        planChapters.add(`${book}-${i}`);
                    }
                } else if (start) {
                    planChapters.add(`${book}-${start}`);
                } else {
                    // Whole book
                    const totalInBook = bibleData[book];
                    if (totalInBook) {
                        for (let i = 1; i <= totalInBook; i++) {
                            planChapters.add(`${book}-${i}`);
                        }
                    }
                }
            });
        });
    });

    return {
        totalChapters: planChapters.size,
        totalBooks: planBooks.size
    };
}

// Calculate month progress
function calculateMonthProgress(monthName) {
    const plan = biblePlans[currentPlanId];
    const monthReadings = getReadingsForMonth(monthName);
    if (!monthReadings.length) return 0;

    let completedDays = 0;
    monthReadings.forEach((dayData, idx) => {
        // Calculate global index based on plan type
        let globalIdx;
        if (currentPlanId === 'proverbios_31') {
            globalIdx = idx; // All days are sequential 0-30
        } else {
            if (plan.isFlexible) {
                const { start } = getFlexibleMonthRange(getPlanDisplayMonths().indexOf(monthName));
                globalIdx = start + idx;
            } else {
                globalIdx = activeReadingPlan.indexOf(dayData);
            }
        }

        const allDone = dayData.readings.every((_, rIdx) => {
            return isReadingCompleted(monthName, globalIdx, rIdx);
        });
        if (allDone) completedDays++;
    });

    return Math.round((completedDays / monthReadings.length) * 100);
}

function getFirstIncompleteDay() {
    const todayIdx = getPlanDayIndex();
    const plan = biblePlans[currentPlanId];
    
    for (let idx = 0; idx < todayIdx; idx++) {
        const dayData = activeReadingPlan[idx];
        if (!dayData || !dayData.readings || dayData.readings.length === 0) continue;
        
        let month;
        let localIdx;
        
        if (currentPlanId === 'proverbios_31') {
            month = 'Mês 1';
            localIdx = idx;
        } else if (plan.isFlexible) {
            const info = getFlexibleDayInfo(idx);
            month = info.monthLabel;
            localIdx = info.dayInMonth - 1; // 0-based
        } else {
            month = dayData.originalMonth;
            const monthReadings = getReadingsForMonth(month);
            localIdx = monthReadings.indexOf(dayData);
        }

        const allDone = dayData.readings.every((_, rIdx) => {
            return isReadingCompleted(month, idx, rIdx);
        });

        if (!allDone) {
            return { idx, month, localIdx };
        }
    }
    return null;
}

// Render today's reading
function renderTodayReading() {
    const { label, month, dayIdx } = getDisplayToday();
    const todayData = activeReadingPlan[dayIdx];
    const t = translations[currentLang];

    const dateEl = document.getElementById('today-date');
    const readingsEl = document.getElementById('today-readings');
    const statusEl = document.getElementById('reading-status');

    // Translate Plan Name (lookup if possible, else keep generic)
    let planName = biblePlans[currentPlanId].name; // Default
    const planKey = 'plan_' + currentPlanId;
    if (t[planKey]) planName = t[planKey];

    const started = isPlanStarted();

    if (statusEl) {
        const incompleteDay = started ? getFirstIncompleteDay() : true;
        const isTodayCompleted = started && (
            !todayData || !todayData.readings || todayData.readings.length === 0 ||
            todayData.readings.every((_, rIdx) => isReadingCompleted(month, dayIdx, rIdx))
        );
        if (!started || incompleteDay || !isTodayCompleted) {
            statusEl.innerHTML = '';
            statusEl.style.position = 'static';
            statusEl.style.float = 'none';
            statusEl.style.marginRight = '0';
            statusEl.style.margin = '0';
            statusEl.style.width = 'auto';
        } else {
            // User is up to date
            statusEl.style.float = 'none';
            statusEl.style.position = 'absolute';
            statusEl.style.left = '35px';
            statusEl.style.top = '50px';
            statusEl.style.transform = 'none';
            statusEl.style.margin = '0';
            statusEl.style.width = '200px';
            statusEl.style.zIndex = '5';
            
            statusEl.innerHTML = `
                <style>
                    @media (max-width: 768px) {
                        #reading-status {
                            position: static !important;
                            transform: none !important;
                            margin: 0 auto 20px auto !important;
                            width: 160px !important;
                        }
                    }
                </style>
                <div style="position: relative; width: 100%; display: flex; justify-content: center; align-items: center;">
                    <div style="position: relative; width: 100%; height: 200px;">
                        <img src="jesus_joinha.png" alt="Jesus Joinha" style="width: 100%; height: 100%; object-fit: contain;">
                        <!-- Horizontal Stamp over chest/hand -->
                        <div style="position: absolute; bottom: 45px; left: 50%; transform: translateX(-50%); border: 3px solid #009c3b; color: #009c3b; font-weight: 900; font-size: 0.95rem; padding: 4px 10px; text-transform: uppercase; border-radius: 4px; text-align: center; background: rgba(255,255,255,0.95); box-shadow: 0 2px 6px rgba(0,0,0,0.3); pointer-events: none; white-space: nowrap; line-height: 1.1; font-family: 'Inter', sans-serif;">
                            LEITURA<br>EM DIA
                        </div>
                    </div>
                </div>
            `;
        }
    }

    if (!started) {
        dateEl.innerHTML = `
            <div class="active-plan-badge">${planName}</div>
            <div style="margin-top: 6px; font-weight: 600; color: #555;">${t['plan_not_started']}</div>
        `;
        readingsEl.innerHTML = `
            <div style="text-align: center; padding: 15px 10px;">
                <p style="color: #666; margin-bottom: 16px; font-size: 0.98rem;">${t['plan_not_started_desc']}</p>
                <button onclick="startPlanToday()" class="check-btn" style="background: var(--primary-gold); color: #fff; padding: 12px 28px; font-size: 1.05rem; border-radius: 8px; box-shadow: 0 3px 10px rgba(212,175,55,0.35);">
                    ${t['start_plan_btn']}
                </button>
            </div>
        `;
        return;
    }

    // Translate date label
    let displayDateLabel = label;

    const now = new Date();
    if (!biblePlans[currentPlanId].isFlexible) {
        // Fixed: "5 de Janeiro" -> "5 of January"
        const day = now.getDate();
        const monthNamePT = monthNames[now.getMonth()];
        const monthIdx = monthNames.indexOf(monthNamePT);
        const translatedMonth = t.month_names[monthIdx];

        // Format based on language preference? keeping simple: "Day of Month"
        if (['en', 'es', 'pt', 'de', 'ru', 'it'].includes(currentLang)) {
            displayDateLabel = `${day} ${t['of']} ${translatedMonth}`;
        } else if (currentLang === 'zh' || currentLang === 'ja') {
            // Asian date format usually Month Day
            displayDateLabel = `${translatedMonth} ${day}${t['days']}`; // Simplified
        }
    } else {
        // Flexible: "Dia 5 de Mês 1"
        const info = getFlexibleDayInfo(dayIdx);
        const dayNum = info.dayInMonth;
        const monthNum = info.monthNum;

        if (currentPlanId === 'proverbios_31') {
            displayDateLabel = `${t['proverbs']} ${t['day_prefix']} ${dayNum}`;
        } else {
            displayDateLabel = `${t['day_prefix']} ${dayNum} ${t['of']} ${t['month_prefix']} ${monthNum}`;
        }
    }

    if (todayData && todayData.readings && todayData.readings.length > 0 && !todayData.readings[0].includes("🎉")) {
        let flexDatesHTML = '';
        if (biblePlans[currentPlanId].isFlexible) {
            const startStr = localStorage.getItem(`bibliaStart_${currentPlanId}`);
            if (startStr) {
                const [y, m, d] = startStr.split('-').map(Number);
                const startDate = new Date(y, m - 1, d);
                const endDate = new Date(startDate);
                endDate.setDate(startDate.getDate() + Math.max(0, activeReadingPlan.length - 1));

                const formatDate = (date) => {
                    const day = String(date.getDate()).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const year = date.getFullYear();
                    return `${day}.${month}.${year}`;
                };

                flexDatesHTML = `
                    <div class="plan-dates-info">
                        <div><span>${t['plan_started']}</span> <strong>${formatDate(startDate)}</strong></div>
                        <div><span>${t['plan_ends']}</span> <strong>${formatDate(endDate)}</strong></div>
                    </div>
                `;
            }
        }

        dateEl.innerHTML = `
            <div class="active-plan-badge">${planName}</div>
            ${displayDateLabel}
            ${flexDatesHTML}
        `;

        readingsEl.innerHTML = todayData.readings.map((reading, index) => {
            const completed = isReadingCompleted(month, dayIdx, index);
            const displayReading = formatReadingDisplay(reading);

            return `
                <div class="reading-item">
                    <span class="reading-text">${displayReading}</span>
                    <button class="check-btn ${completed ? 'completed' : ''}" 
                            onclick="toggleReading('${month}', ${dayIdx}, ${index})">
                        ${completed ? t['read_done'] : t['read_btn']}
                    </button>
                </div>
            `;
        }).join('');
    } else {
        dateEl.innerHTML = `
             <div class="active-plan-badge">${planName}</div>
             ${displayDateLabel}
        `;
        readingsEl.innerHTML = `<p>${t['no_reading']}</p>`;
    }
}

// Render stats
function renderStats() {
    const stats = calculateStats();
    const bibleStats = calculateBibleDetailedStats();
    const { month } = getDisplayToday();
    const activeMonth = window.currentDisplayedMonth || month;
    const monthProgress = calculateMonthProgress(activeMonth);
    const t = translations[currentLang];

    // Total Days Progress
    document.getElementById('total-progress').textContent = `${stats.percentage}%`;
    document.getElementById('days-completed').textContent = stats.daysCompleted;
    document.getElementById('total-days-label').textContent = stats.totalDays;
    document.getElementById('main-progress-bar').style.width = `${stats.percentage}%`;

    // Current/Active Month Progress
    document.getElementById('month-progress').textContent = `${monthProgress}%`;

    // Translate Month Label
    let displayMonth = activeMonth;
    // activeMonth is "Janeiro" (Fixed) or "Mês 1" (Flexible)

    if (activeMonth.startsWith('Mês')) {
        const monthNum = parseInt(activeMonth.split(' ')[1]);
        displayMonth = `${t['month_prefix']} ${monthNum}`;
        if (currentPlanId === 'proverbios_31' && monthNum === 1) displayMonth = t['proverbs'];
    } else {
        // It's a Portuguese month name
        const mIdx = monthNames.indexOf(activeMonth);
        if (mIdx >= 0) displayMonth = t.month_names[mIdx];
    }

    document.getElementById('month-label').textContent = displayMonth;
    document.getElementById('month-progress-bar').style.width = `${monthProgress}%`;

    // Bible Stats (Detailed)
    document.getElementById('bible-percent').textContent = `${bibleStats.percentage}%`;
    document.getElementById('bible-progress-bar').style.width = `${bibleStats.percentage}%`;
    document.getElementById('bible-chapters-read').textContent = bibleStats.chaptersRead;
    document.getElementById('bible-chapters-total').textContent = bibleStats.totalChapters;
    document.getElementById('bible-books-read').textContent = bibleStats.booksCompleted;
    if (document.getElementById('bible-books-total')) {
        document.getElementById('bible-books-total').textContent = bibleStats.totalBooks;
    }
}

// Render months grid
function renderMonthsGrid() {
    const monthsGrid = document.getElementById('months-grid');
    const { month: todayMonth } = getDisplayToday();
    const activeMonth = window.currentDisplayedMonth || todayMonth;
    const months = getPlanDisplayMonths();
    const t = translations[currentLang];

    monthsGrid.innerHTML = months.map(month => {
        const isActive = month === activeMonth;
        const progress = calculateMonthProgress(month);
        const isCompleted = progress === 100;

        let displayMonth = month;
        if (month.startsWith('Mês')) {
            const monthNum = parseInt(month.split(' ')[1]);
            displayMonth = `${t['month_prefix']} ${monthNum}`;
            if (currentPlanId === 'proverbios_31' && monthNum === 1) displayMonth = t['proverbs'];
        } else {
            const mIdx = monthNames.indexOf(month);
            if (mIdx >= 0) displayMonth = t.month_names[mIdx];
        }

        // Add custom attribute for CSS if needed, but we used class .completed-month
        // Ribbon text is in CSS "COMPLETO", we might need to change it via JS style injection or class
        // Since CSS content is static, we can use a span instead or just accept English "COMPLETE" or universal icon?
        // Actually, CSS content cannot be easily translated via JS variables without custom properties.
        // Let's change the CSS to use a data attribute or just update the class logic.
        // For now, let's leave ribbon in PT/EN or simple checkmark.

        // Better: Use inner HTML for ribbon so we can translate it
        const ribbonHTML = isCompleted ? `<div class="ribbon">${t['completed_ribbon']}</div>` : '';

        return `
            <div class="month-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed-month' : ''}" 
                 onclick="showMonthDays('${month}', false)">
                ${displayMonth}
                ${ribbonHTML}
            </div>
        `;
    }).join('');
}

// Show days for a specific month
function showMonthDays(monthName, shouldScroll = true) {
    window.currentDisplayedMonth = monthName;
    renderMonthsGrid();
    renderStats();

    const daysList = document.getElementById('days-list');
    const monthReadings = getReadingsForMonth(monthName);
    const months = getPlanDisplayMonths();
    const monthIdx = months.indexOf(monthName);
    const plan = biblePlans[currentPlanId];
    const t = translations[currentLang];

    let displayMonthName = monthName;
    if (monthName.startsWith('Mês')) {
        const monthNum = parseInt(monthName.split(' ')[1]);
        displayMonthName = `${t['month_prefix']} ${monthNum}`;
        if (currentPlanId === 'proverbios_31' && monthNum === 1) displayMonthName = t['proverbs'];
    } else {
        const mIdx = monthNames.indexOf(monthName);
        if (mIdx >= 0) displayMonthName = t.month_names[mIdx];
    }

    daysList.innerHTML = `
        <div class="month-header-section">
            <h2 style="text-align: center; margin-bottom: 1rem;">${displayMonthName}</h2>
            <div class="month-actions">
                <button onclick="markMonthComplete('${monthName}')" class="mark-month-btn">
                    ${t['mark_all']}
                </button>
                <button onclick="unmarkMonthComplete('${monthName}')" class="unmark-month-btn">
                    ${t['unmark_all']}
                </button>
            </div>
        </div>
    ` +
        monthReadings.map((dayData, idx) => {
            // Calculate global index based on plan type
            let globalIdx;
            if (currentPlanId === 'proverbios_31') {
                globalIdx = idx; // All days are sequential 0-30
            } else {
                if (plan.isFlexible) {
                    const { start } = getFlexibleMonthRange(monthIdx);
                    globalIdx = start + idx;
                } else {
                    globalIdx = activeReadingPlan.indexOf(dayData);
                }
            }
            const isAllDone = dayData.readings.every((_, rIdx) => isReadingCompleted(monthName, globalIdx, rIdx));
            const isSomeDone = dayData.readings.some((_, rIdx) => isReadingCompleted(monthName, globalIdx, rIdx));
            const status = isAllDone ? 'completed' : (isSomeDone ? 'partial' : '');

            return `
                <div class="day-item ${status}">
                    <div class="day-header">
                        <span class="day-number">${t['day_prefix']} ${idx + 1}</span>
                    </div>
                    <div class="day-readings">
                        ${dayData.readings.map((reading, rIdx) => `
                            <div class="day-reading">
                                <span class="day-reading-text">${formatReadingDisplay(reading)}</span>
                                <div class="mini-check ${isReadingCompleted(monthName, globalIdx, rIdx) ? 'checked' : ''}"
                                     onclick="toggleReading('${monthName}', ${globalIdx}, ${rIdx})">
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');

    if (shouldScroll) {
        daysList.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update Dynamic Calendar Icon
function updateDynamicCalendar() {
    const now = new Date();
    const day = now.getDate();
    const t = translations[currentLang];
    const monthName = t.month_names[now.getMonth()];

    let monthShort = monthName;
    if (currentLang !== 'zh' && currentLang !== 'ja') {
        monthShort = monthName.substring(0, 3).toUpperCase();
    }

    const calContainer = document.getElementById('dynamic-calendar');
    if (calContainer) {
        calContainer.innerHTML = `
            <div class="cal-month">${monthShort}</div>
            <div class="cal-day">${day}</div>
        `;
    }
}

// Update entire UI
function updateUI() {
    updateDynamicCalendar();
    renderTodayReading();
    renderStats();
    renderMonthsGrid(); // Force re-render of month buttons to update "COMPLETO" ribbon
    
    if (!localStorage.getItem('qtn_hasSeenWelcome')) {
        renderWelcomeBanner();
    } else {
        renderLateBanner();
    }

    // Re-render the currently displayed month WITHOUT scrolling
    if (window.currentDisplayedMonth) {
        showMonthDays(window.currentDisplayedMonth, false);
    }
}

// ===== Late Reading Banner (All Started Plans) =====

/**
 * Counts how many plan-days before today have at least one unfinished reading.
 */
function calculateLateReadingDays() {
    if (!isPlanStarted()) return 0;

    const plan = biblePlans[currentPlanId];
    const todayIdx = getPlanDayIndex(); // 0-based index of today in the plan
    let lateDays = 0;

    // Iterate every day prior to today (index 0 … todayIdx-1)
    for (let idx = 0; idx < todayIdx; idx++) {
        const dayData = activeReadingPlan[idx];
        if (!dayData || !dayData.readings || dayData.readings.length === 0) continue;

        let month;
        if (currentPlanId === 'proverbios_31') {
            month = 'Mês 1';
        } else if (plan.isFlexible) {
            const info = getFlexibleDayInfo(idx);
            month = info.monthLabel;
        } else {
            month = dayData.originalMonth;
        }

        const allDone = dayData.readings.every((_, rIdx) => {
            return isReadingCompleted(month, idx, rIdx);
        });

        if (!allDone) lateDays++;
    }

    return lateDays;
}

/** Dismisses the late-reading banner for 24 hours. */
function dismissLateBanner() {
    const until = Date.now() + 24 * 60 * 60 * 1000; // now + 24h in ms
    localStorage.setItem('lateBannerDismissedUntil', until.toString());
    const banner = document.getElementById('late-reading-banner');
    if (banner) {
        banner.style.animation = 'bannerFadeIn 0.3s ease-out reverse';
        setTimeout(() => banner.remove(), 280);
    }
}

/** Renders the late-reading encouragement banner inside .container > main. */
function renderLateBanner() {
    if (!isPlanStarted()) {
        const banner = document.getElementById('late-reading-banner');
        if (banner) banner.remove();
        return;
    }

    // Check if user dismissed it recently
    const dismissedUntil = parseInt(localStorage.getItem('lateBannerDismissedUntil') || '0');
    if (Date.now() < dismissedUntil) return;

    const lateDays = calculateLateReadingDays();
    if (lateDays <= 0) {
        const banner = document.getElementById('late-reading-banner');
        if (banner) banner.remove();
        return;
    }

    // Do not show late banner if welcome banner is pending
    if (!localStorage.getItem('qtn_hasSeenWelcome')) return;

    const incompleteDay = getFirstIncompleteDay();
    if (!incompleteDay) return;

    const t = translations[currentLang];
    const planKey = 'plan_' + currentPlanId;
    const planName = t[planKey] || biblePlans[currentPlanId].name;

    // Choose an encouraging verse based on how many days late (cycles through a small set)
    const verses = [
        { text: '"Não desfaleceremos; porque, ainda que o nosso homem exterior se corrompa, o interior, contudo, se renova de dia em dia."', ref: '2 Coríntios 4:16' },
        { text: '"O Senhor é compassivo e misericordioso, tardio em irar-se e abundante em graça."', ref: 'Salmos 103:8' },
        { text: '"Deleita-te também no Senhor, e Ele te concederá o que deseja o teu coração."', ref: 'Salmos 37:4' },
        { text: '"Recomeça quantas vezes precisar. Cada dia é uma nova misericórdia de Deus."', ref: '— Lamentações 3:22-23' },
        { text: '"Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal."', ref: 'Jeremias 29:11' },
    ];
    const verseData = verses[(lateDays - 1) % verses.length];

    // Build the day label (singular / plural)
    const dayWord = lateDays === 1 ? 'dia' : 'dias';

    let banner = document.getElementById('late-reading-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'late-reading-banner';
        banner.className = 'late-reading-banner';
        
        // Insert right after the warning-box
        const warningBox = document.querySelector('.warning-box');
        if (warningBox) {
            warningBox.after(banner);
        } else {
            const main = document.querySelector('main.container');
            if (main) main.prepend(banner);
        }
    }

    banner.innerHTML = `
        <div class="late-banner-icon">🕊️</div>
        <div class="late-banner-body">
            <div class="late-banner-title">A paz do Senhor, vida amada! O seu progresso não está em dia, mas ainda dá tempo de retomar. Na verdade, sempre dá!🙏</div>
            <p class="late-banner-message">
                Você tem <span class="late-banner-days">${lateDays} ${dayWord}</span>
                ${lateDays === 1 ? `com leitura pendente no ${planName}.` : `com leituras pendentes no ${planName}.`}
                Não se preocupe — Deus conhece o seu coração e celebra cada passo.
            </p>
            <div class="late-banner-verse">${verseData.text}<br><strong>${verseData.ref}</strong></div>
            <div style="margin-top: 15px;">
                <button onclick="showMonthDays('${incompleteDay.month}', true); setTimeout(() => { const items = document.querySelectorAll('#days-list .day-item'); if(items[${incompleteDay.localIdx}]) items[${incompleteDay.localIdx}].scrollIntoView({behavior: 'smooth', block: 'center'}); }, 100);" style="padding: 10px 15px; background-color: #b8860b; border: none; border-radius: 5px; color: #fff; cursor: pointer; font-size: 0.95rem; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                    Clique aqui e coloque em dia sua leitura
                </button>
            </div>
        </div>
        <button class="late-banner-close" onclick="dismissLateBanner()" title="Fechar por hoje">✕</button>
    `;
}

// ===== Welcome Banner =====
function dismissWelcomeBanner() {
    localStorage.setItem('qtn_hasSeenWelcome', 'true');
    const banner = document.getElementById('welcome-banner');
    if (banner) {
        banner.remove();
    }
    updateUI();
}

function renderWelcomeBanner() {
    let banner = document.getElementById('welcome-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'welcome-banner';
        banner.className = 'late-reading-banner'; // Reuse styling
        
        const warningBox = document.querySelector('.warning-box');
        if (warningBox) {
            warningBox.after(banner);
        } else {
            const main = document.querySelector('main.container');
            if (main) main.prepend(banner);
        }
    }

    banner.innerHTML = `
        <div class="late-banner-icon">📖</div>
        <div class="late-banner-body">
            <div class="late-banner-title" style="color: #009c3b;">Bem-vindo(a) ao Quiet Time Now.</div>
            <p class="late-banner-message" style="margin-bottom: 12px; font-size: 1.05rem; font-weight: 500;">
                O seu progresso de leitura bíblica em um só lugar.
            </p>
            <ul style="text-align: left; margin-left: 20px; font-size: 0.95rem; color: #555; line-height: 1.6; margin-bottom: 15px;">
                <li><strong>Escolha um plano:</strong> Selecione seu plano de leitura preferido no menu do topo.</li>
                <li><strong>Leitura de Hoje:</strong> Veja o que ler no dia atual e clique em "Marcar" após concluir.</li>
                <li><strong>Progresso:</strong> Navegue pelos meses mais abaixo para ver o seu histórico.</li>
                <li><strong>Atrasou?</strong> Não se preocupe! O sistema te avisará e ajudará a encontrar onde parou para colocar a leitura em dia.</li>
            </ul>
            <div style="margin-top: 15px; text-align: center;">
                <button onclick="dismissWelcomeBanner()" style="padding: 10px 25px; background-color: #009c3b; border: none; border-radius: 5px; color: #fff; cursor: pointer; font-size: 1rem; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transition: all 0.2s;">
                    Entendi, vamos começar!
                </button>
            </div>
        </div>
    `;
}

// Initialize app
function init() {
    // Automatically flag existing users so they don't see the welcome banner
    const currentProgress = getProgress();
    if (Object.keys(currentProgress).length > 0 && !localStorage.getItem('qtn_hasSeenWelcome')) {
        localStorage.setItem('qtn_hasSeenWelcome', 'true');
    }

    // Set initial language (which handles initial rendering of texts)
    changeLanguage(currentLang);

    // Initial Render calls are redundant if changeLanguage calls updateUI, but let's keep them safe or remove duplicates
    // changeLanguage calls updateUI -> renderTodayReading, renderStats, renderMonthsGrid
    // So we just need to handle the specific showMonthDays logic below

    // Show current month by default WITHOUT scrolling
    const { month } = getDisplayToday();
    showMonthDays(month, false);

    // Highlight active plan in dropdown
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick')?.includes(`'${currentPlanId}'`)) {
            item.classList.add('active');
        }
    });

    // Setup scroll-to-top button
    setupScrollToTop();

    // Setup Plan Menu stability
    setupPlanMenu();

    // Show welcome banner or late-reading banner
    if (!localStorage.getItem('qtn_hasSeenWelcome')) {
        renderWelcomeBanner();
    } else {
        renderLateBanner();
    }
}

// Plan Menu Stability Logic
function setupPlanMenu() {
    const planSelector = document.querySelector('.plan-selector');
    const planBtn = document.getElementById('plan-selector-btn');

    if (planBtn && planSelector) {
        planBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            planSelector.classList.toggle('active');
        });

        // Close when clicking outside
        document.addEventListener('click', () => {
            planSelector.classList.remove('active');
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') planSelector.classList.remove('active');
        });
    }
}

// Scroll Buttons functionality
function setupScrollToTop() {
    const scrollTopContainer = document.getElementById('scroll-to-top-container');
    const scrollBottomContainer = document.getElementById('scroll-to-bottom-container');

    // Show/hide buttons based on scroll position
    window.addEventListener('scroll', () => {
        // Top button logic (existing)
        if (window.scrollY > 300) {
            scrollTopContainer.classList.add('visible');
        } else {
            scrollTopContainer.classList.remove('visible');
        }

        // Bottom button logic (inverse)
        // Hide bottom button when we are near the bottom or scrolled down significantly
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;

        if (scrollPosition >= pageHeight - 100) { // Near bottom
            scrollBottomContainer.classList.add('hidden');
        } else {
            if (window.scrollY > 300) { // If scrolled down a bit, maybe hide it to avoid clutter? 
                // User asked for "start", implying it should maybe disappear as we go down visually
                // But typically "Go to Bottom" is useful until you are there.
                // Let's keep it visible until near bottom.
                scrollBottomContainer.classList.remove('hidden');
            } else {
                scrollBottomContainer.classList.remove('hidden');
            }
        }

        // Simpler logic for bottom button: Hide if at bottom
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            scrollBottomContainer.classList.add('hidden');
        } else {
            scrollBottomContainer.classList.remove('hidden');
        }
    });

    // Scroll to top when clicked
    scrollTopContainer.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll to bottom when clicked
    scrollBottomContainer.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
}

// Check for month completion
function checkMonthCompletion(month) {
    // Small delay to ensure state is updated
    setTimeout(() => {
        const progress = calculateMonthProgress(month);
        // Only show if exactly 100%
        if (progress === 100) {
            showModal(month);
        }
    }, 100);
}

// Modal Functions
function showModal(month = '') {
    const modal = document.getElementById('congrats-modal');
    const t = translations[currentLang];

    if (month) {
        if (currentPlanId === 'kids_jovens') {
            const monthNum = parseInt(month.replace(/\D/g, '')) || 1;
            // Ordinals are hard to translate dynamically without arrays for each lang.
            // Simplified approach: "You completed all readings for Month X!"
            const monthLabel = `${t['month_prefix']} ${monthNum}`;
            document.getElementById('modal-message-text').textContent = t['congrats_month'];
        } else {
            // Customize message for Proverbs plan
            const displayText = (currentPlanId === 'proverbios_31' && month === 'Mês 1')
                ? t['proverbs']
                : month; // Fallback if month is localized by previous code it might look weird here?

            // Re-calc display text properly logic
            let displayMonthName = month;
            if (month.startsWith('Mês')) {
                const monthNum = parseInt(month.split(' ')[1]);
                displayMonthName = `${t['month_prefix']} ${monthNum}`;
                if (currentPlanId === 'proverbios_31' && monthNum === 1) displayMonthName = t['proverbs'];
            } else {
                const mIdx = monthNames.indexOf(month);
                if (mIdx >= 0) displayMonthName = t.month_names[mIdx];
            }

            document.getElementById('modal-message-text').textContent = t['congrats_month'];
        }
    }
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('congrats-modal').classList.remove('active');
}

// Run on page load
document.addEventListener('DOMContentLoaded', init);

// Mark entire month as complete
function markMonthComplete(monthName) {
    const t = translations[currentLang];
    const displayText = (currentPlanId === 'proverbios_31' && monthName === 'Mês 1')
        ? t['proverbs']
        : monthName;

    // Re-calc display text properly logic
    let displayMonthName = monthName;
    if (monthName.startsWith('Mês')) {
        const monthNum = parseInt(monthName.split(' ')[1]);
        displayMonthName = `${t['month_prefix']} ${monthNum}`;
        if (currentPlanId === 'proverbios_31' && monthNum === 1) displayMonthName = t['proverbs'];
    } else {
        const mIdx = monthNames.indexOf(monthName);
        if (mIdx >= 0) displayMonthName = t.month_names[mIdx];
    }

    const confirm = window.confirm(
        `${t['mark_all']} ${displayMonthName}?`
    );

    if (!confirm) return;

    const progress = getProgress();
    const monthReadings = getReadingsForMonth(monthName);
    const months = getPlanDisplayMonths();
    const monthIdx = months.indexOf(monthName);
    const plan = biblePlans[currentPlanId];

    monthReadings.forEach((dayData, idx) => {
        let globalIdx;
        if (currentPlanId === 'proverbios_31') {
            globalIdx = idx;
        } else {
            if (plan.isFlexible) {
                const { start } = getFlexibleMonthRange(monthIdx);
                globalIdx = start + idx;
            } else {
                globalIdx = activeReadingPlan.indexOf(dayData);
            }
        }
        dayData.readings.forEach((_, rIdx) => {
            const key = getReadingKey(monthName, globalIdx, rIdx);
            progress[key] = true;
        });
    });

    saveProgress(progress);
    updateUI();
    checkMonthCompletion(monthName);
}

// Unmark entire month (remove progress)
function unmarkMonthComplete(monthName) {
    const t = translations[currentLang];

    // Re-calc display text properly logic
    let displayMonthName = monthName;
    if (monthName.startsWith('Mês')) {
        const monthNum = parseInt(monthName.split(' ')[1]);
        displayMonthName = `${t['month_prefix']} ${monthNum}`;
        if (currentPlanId === 'proverbios_31' && monthNum === 1) displayMonthName = t['proverbs'];
    } else {
        const mIdx = monthNames.indexOf(monthName);
        if (mIdx >= 0) displayMonthName = t.month_names[mIdx];
    }

    let confirmMsg = `${t['warning_title']}? ${t['unmark_all']} ${displayMonthName}?`;
    if (currentPlanId === 'proverbios_31') {
        confirmMsg += "\n\n(Aviso: Ao desmarcar tudo, a contagem de dias também será zerada!)";
    }
    const confirm = window.confirm(confirmMsg);

    if (!confirm) return;

    const progress = getProgress();
    const monthReadings = getReadingsForMonth(monthName);
    const months = getPlanDisplayMonths();
    const monthIdx = months.indexOf(monthName);
    const plan = biblePlans[currentPlanId];

    monthReadings.forEach((dayData, idx) => {
        let globalIdx;
        if (currentPlanId === 'proverbios_31') {
            globalIdx = idx;
        } else {
            if (plan.isFlexible) {
                const { start } = getFlexibleMonthRange(monthIdx);
                globalIdx = start + idx;
            } else {
                globalIdx = activeReadingPlan.indexOf(dayData);
            }
        }
        dayData.readings.forEach((_, rIdx) => {
            const key = getReadingKey(monthName, globalIdx, rIdx);
            delete progress[key];
        });
    });

    if (currentPlanId === 'proverbios_31') {
        localStorage.removeItem(`bibliaStart_${currentPlanId}`);
    }

    // Reset the dismissed banner state so it reappears if they unmark an old month
    localStorage.removeItem('lateBannerDismissedUntil');

    saveProgress(progress);
    updateUI();
}

// Backup and Restore Functions
function exportBackup() {
    const t = translations[currentLang];
    const progress = getProgress();
    const backup = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        progress: progress
    };

    const dataStr = JSON.stringify(backup, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `qtn-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert(t['backup_success']);
}

function importBackup() {
    document.getElementById('backup-file-input').click();
}

function handleFileSelect(event) {
    const t = translations[currentLang];
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const backup = JSON.parse(e.target.result);

            if (!backup.progress) {
                alert(t['backup_invalid']);
                return;
            }

            // Confirm before overwriting
            const confirm = window.confirm(
                t['restore_confirm']
            );

            if (confirm) {
                // Since they restored progress, we can assume they aren't completely new
                localStorage.setItem('qtn_hasSeenWelcome', 'true');
                saveProgress(backup.progress);
                updateUI();
                alert(t['restore_success']);
            }
        } catch (error) {
            alert(t['restore_error']);
            console.error(error);
        }
    };

    reader.readAsText(file);

    // Reset input so same file can be selected again
    event.target.value = '';
}

// ===== PWA Mobile Install Button Logic =====
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
});

window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    const container = document.getElementById('install-pwa-container');
    if (container) container.style.display = 'none';
});

async function installPWA() {
    if (deferredInstallPrompt) {
        try {
            await deferredInstallPrompt.prompt();
            const { outcome } = await deferredInstallPrompt.userChoice;
            deferredInstallPrompt = null;
            if (outcome === 'accepted') {
                const container = document.getElementById('install-pwa-container');
                if (container) container.style.display = 'none';
            }
            return;
        } catch (err) {
            // Fall back to visual instructions below
        }
    }

    const helpBox = document.getElementById('install-pwa-help');
    const ua = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;

    const msgHTML = isIOS
        ? '<strong>📲 Como instalar no iPhone / iPad:</strong><br>' +
          '1. Abra este link no navegador <strong>Safari</strong>.<br>' +
          '2. Toque no botão <strong>Compartilhar</strong> (quadradinho com seta para cima).<br>' +
          '3. Role para baixo e toque em <strong>"Adicionar à Tela de Início"</strong>.'
        : '<strong>📲 Como instalar no Android (use o Google Chrome):</strong><br>' +
          '• Navegadores como Firefox ou Brave podem dificultar a instalação. Recomendamos abrir no <strong>Google Chrome</strong>!<br>' +
          '• Se abriu pelo WhatsApp, toque nos 3 pontinhos (<strong>⋮</strong>) e escolha <strong>"Abrir no Chrome"</strong>.<br>' +
          '• No Chrome, toque nos 3 pontinhos (<strong>⋮</strong>) no canto superior direito e selecione <strong>"Instalar aplicativo"</strong>.';

    if (helpBox) {
        helpBox.innerHTML = msgHTML;
        helpBox.style.display = helpBox.style.display === 'none' ? 'block' : 'none';
    } else {
        alert(msgHTML.replace(/<[^>]+>/g, ''));
    }
}
