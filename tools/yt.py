#!/usr/bin/env python3
"""Busca e verificação de vídeos do YouTube pra biblioteca videos.js.

  python3 tools/yt.py "supino inclinado halteres execução correta"   → lista até 8 candidatos (id, duração, título)
  python3 tools/yt.py --verify ID [ID ...]                             → confirma via oEmbed (título, canal)

Critério pra escolher: clipe curto (< 1 min é o ideal), em português, mostrando a execução, sem intro longa.
Não dá pra saber daqui se o dono permite embed: se aparecer "vídeo indisponível" na página, trocar o ID.
"""
import json, re, sys, urllib.parse, urllib.request

UA = {"User-Agent": "Mozilla/5.0", "Accept-Language": "pt-BR,pt;q=0.9"}

def search(q, n=8):
    url = "https://www.youtube.com/results?search_query=" + urllib.parse.quote(q)
    html = urllib.request.urlopen(urllib.request.Request(url, headers=UA)).read().decode()
    out, seen = [], set()
    for m in re.finditer(r'"videoRenderer":\{"videoId":"([^"]+)".*?"title":\{"runs":\[\{"text":"([^"]+)"', html):
        vid, title = m.groups()
        if vid in seen: continue
        seen.add(vid)
        d = re.search(r'"videoId":"%s".{0,3000}?"lengthText":\{"accessibility".*?"simpleText":"([^"]+)"' % re.escape(vid), html)
        out.append((vid, d.group(1) if d else "?", title))
        if len(out) >= n: break
    return out

def verify(vid):
    url = "https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=" + vid
    try:
        j = json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA)))
        return True, j["title"], j["author_name"]
    except Exception as e:
        return False, str(e), ""

if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        print(__doc__); sys.exit(1)
    if args[0] == "--verify":
        for vid in args[1:]:
            ok, t, a = verify(vid)
            print(f"{'OK  ' if ok else 'FAIL'} {vid}  {t[:60]}  [{a}]")
    else:
        for vid, dur, title in search(" ".join(args)):
            print(f"{vid}  {dur:>6}  {title[:80]}")
