
export default function Containeright({ index, name, description }) {
    return (
        <div class="main-right-TOP-character">
            <div class="main-right-TOP-character-number">
                <p style="background:rgba(210, 105, 30, 0.504) ;">${index}</p>
            </div>
            <div class="main-right-TOP-character-text">
                <div class="main-right-TOP-character-comic">
                    <p class="name-TOP">${name}</p>
                </div>
                <div class="main-right-TOP-character-genre">
                    <p class="derection-TOP">${description}</p>
                </div>
            </div>
        </div>
    )
}
