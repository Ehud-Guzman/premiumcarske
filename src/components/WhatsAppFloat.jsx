import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in your cars. Can you help me find the right one?";
    const phone = "254700123456";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-btn flex items-center space-x-2 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 animate-bounce"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold">Chat</span>
      </button>
    </div>
  )
}

export default WhatsAppFloat