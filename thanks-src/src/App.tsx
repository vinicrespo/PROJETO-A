import React from 'react';
import { CheckCircle, Mail, AlertCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center font-sans px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden pt-8 pb-10 px-6 text-center border border-gray-100">
        
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4 animate-pulse">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </div>

        <h1 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
          Compra Aprovada!
        </h1>
        
        <p className="text-gray-600 text-lg font-medium mb-8 leading-relaxed">
          Muito obrigado pela sua confiança.
        </p>

        <div className="bg-blue-50 rounded-xl p-5 mb-6 text-left border border-blue-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-blue-900 text-lg mb-1">Acesso enviado por E-mail</h3>
              <p className="text-blue-800 text-sm leading-snug">
                Nós acabamos de enviar um e-mail com todas as instruções e o link de acesso ao seu conteúdo.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 text-left bg-orange-50 rounded-xl p-4 border border-orange-100">
          <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
          <p className="text-sm text-orange-800">
            <strong className="font-semibold block mb-0.5">Não encontrou o e-mail?</strong>
            Por favor, verifique a sua caixa de <b>Spam</b> ou <b>Promoções</b>. Pode levar até 5 minutos para chegar.
          </p>
        </div>

      </div>
      
      <p className="text-gray-400 text-sm mt-8 font-medium">
        © {new Date().getFullYear()} Gelatide. Todos os direitos reservados.
      </p>
    </div>
  );
}
