export default {
  async fetch(request) {
    const { searchParams } = new URL(request.url);
    
    // 파라미터 읽기
    const interest = searchParams.get('int') || '50';
    const arousal = searchParams.get('arou') || '0';
    const trust = searchParams.get('trust') || '50';
    const txt = decodeURIComponent(searchParams.get('txt') || '').replace(/_/g, ' ');

    const svg = `
    <svg width="400" height="150" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="150" rx="15" fill="#121212" stroke="#2a2a2a" stroke-width="2"/>
      
      <text x="20" y="35" fill="#e0e0e0" font-family="sans-serif" font-size="13" font-weight="bold">관심도</text>
      <rect x="80" y="25" width="300" height="12" rx="6" fill="#222"/>
      <rect x="80" y="25" width="${interest * 3.0}" height="12" rx="6" fill="#ffeb3b"/>
      
      <text x="20" y="65" fill="#e0e0e0" font-family="sans-serif" font-size="13" font-weight="bold">흥분도</text>
      <rect x="80" y="55" width="300" height="12" rx="6" fill="#222"/>
      <rect x="80" y="55" width="${arousal * 3.0}" height="12" rx="6" fill="#ff5252"/>
      
      <text x="20" y="65" fill="#e0e0e0" font-family="sans-serif" font-size="13" font-weight="bold" transform="translate(0, 30)">호감도</text>
      <rect x="80" y="85" width="300" height="12" rx="6" fill="#222"/>
      <rect x="80" y="85" width="${trust * 3.0}" height="12" rx="6" fill="#4facfe"/>
      
      <rect x="15" y="115" width="370" height="25" rx="5" fill="#1e1e1e" stroke="#333"/>
      <text x="200" y="132" fill="#ffffff" font-family="sans-serif" font-size="12" text-anchor="middle" font-style="italic">
        ${txt}
      </text>
    </svg>`;

    return new Response(svg, {
      headers: { 
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-cache'
      }
    });
  }
}
