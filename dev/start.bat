if not exist dev\live-editor\ (
    cd dev
    git clone --depth 1 --filter=blob:none --sparse https://github.com/Khan/live-editor
    cd live-editor
    git sparse-checkout set build
    cd ../..
)
echo http://localhost:8000/dev
python -m http.server
