{
  "name": "KORRAYT",
  "displayName": "KORAY TASAN",
  "version": "1.0.0",
  "description": "Bu proje, temel amaçları ve çalışma mantığı açıkça tanımlanmış genel bir uygulama/proje manifestidir.",
  "author": {
    "name": "Soner Koray Tasan",
    "email": "ben@koraytasan.com"
  },
  "license": "Proprietary",
  "type": "application",
  "status": "development",

  "main": {
    "entry": "src/main",
    "frontend": "src/frontend",
    "backend": "src/backend",
    "config": "config"
  },

  "goals": [
    "Kullanıcıya açık, güvenli ve anlaşılır bir deneyim sunmak",
    "Yerel verileri korumak",
    "Modüler ve geliştirilebilir bir yapı sağlamak",
    "Hataları gizlemeden açık şekilde bildirmek"
  ],

  "principles": [
    "Şeffaflık",
    "Güvenlik",
    "Yerel veri kontrolü",
    "Kullanıcı izni olmadan kritik işlem yapmama",
    "Açık hata mesajları",
    "Modüler geliştirme"
  ],

  "permissions": {
    "filesystem": false,
    "network": false,
    "camera": false,
    "microphone": false,
    "clipboard": false,
    "shell": false
  },

  "security": {
    "localFirst": true,
    "dataEncryption": true,
    "requiresUserApprovalForSensitiveActions": true,
    "allowRemoteExecution": false,
    "logsSensitiveData": false
  },

  "modules": [
    {
      "id": "core",
      "name": "Core System",
      "enabled": true,
      "description": "Ana çalışma mantığını ve temel sistem davranışını yönetir."
    },
    {
      "id": "ui",
      "name": "User Interface",
      "enabled": true,
      "description": "Kullanıcı arayüzünü sağlar."
    },
    {
      "id": "memory",
      "name": "Local Memory",
      "enabled": true,
      "description": "Yerel hafıza ve geçmiş yönetimini sağlar."
    }
  ],

  "runtime": {
    "environment": "local",
    "offlineSupport": true,
    "requiresInternet": false,
    "supportedPlatforms": [
      "windows",
      "macos",
      "linux"
    ]
  },

  "updatePolicy": {
    "autoUpdate": false,
    "requiresUserConfirmation": true,
    "rollbackSupported": true
  },

  "errorPolicy": {
    "hideCriticalErrors": false,
    "showReadableErrors": true,
    "fallbackMode": true
  },

  "limitations": [
    "Bu manifest genel amaçlıdır.",
    "Projeye göre izinler ve modüller ayrıca özelleştirilmelidir.",
    "Güvenlik ayarları canlı kullanıma geçmeden önce tekrar gözden geçirilmelidir."
  ],

  "metadata": {
    "createdAt": "2026-05-31",
    "schemaVersion": "1.0",
    "tags": [
      "general",
      "manifest",
      "local-first",
      "modular"
    ]
  }
}
