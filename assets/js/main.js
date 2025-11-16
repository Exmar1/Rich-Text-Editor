const FormatButton = document.querySelectorAll('.format')
const ScriptButton = document.querySelectorAll('.script')
const ListBtn = document.querySelectorAll('.list')
const UndoButton = document.querySelectorAll('.undo')
const LinkBtn = document.querySelectorAll('.link')
const AlignBtn = document.querySelectorAll('.align')
const SpacingBtn = document.querySelectorAll('.spacing')

const SelectFontName = document.getElementById('fontName')
const SelectFontSize = document.getElementById('fontSize')
const FontColorInput = document.getElementById('foreColor')
const BackColorInput = document.getElementById('backColor')

const TextArea = document.getElementById('TextInput')

function hasText() {
	return TextArea.textContent.trim().length > 0
}

function clearActive(buttons) {
	buttons.forEach(btn => btn.classList.remove('active'))
}

function FormatText() {
	FormatButton.forEach(btn => {
		btn.addEventListener('click', () => {
			if (!hasText()) return

			btn.classList.toggle('active')

			const commands = {
				bold: 'bold',
				italic: 'italic',
				underline: 'underline',
				strikethrough: 'strikeThrough',
			}

			document.execCommand(commands[btn.id], false, null)
		})
	})
}

function Script() {
	ScriptButton.forEach(btn => {
		btn.addEventListener('click', () => {
			if (!hasText()) return

			const commands = {
				superscript: 'superscript',
				subrscript: 'subscript',
			}

			const isActive = btn.classList.contains('active')
			clearActive(ScriptButton)
			if (!isActive) btn.classList.add('active')

			document.execCommand(commands[btn.id], false, null)
			TextArea.focus()
		})
	})
}

function List() {
	ListBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			if (!hasText()) return

			const commands = {
				insertOrderedList: 'insertOrderedList',
				insertUnorderList: 'insertUnorderedList',
			}

			const isActive = btn.classList.contains('active')
			clearActive(ListBtn)
			if (!isActive) btn.classList.add('active')

			document.execCommand(commands[btn.id], false, null)
			TextArea.focus()
		})
	})
}

function Arrows() {
	UndoButton.forEach(btn => {
		btn.addEventListener('click', () => {
			const commands = { undo: 'undo', redo: 'redo' }
			document.execCommand(commands[btn.id], false, null)
		})
	})
}

function Link() {
	LinkBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			if (!hasText()) return

			const commands = {
				createLink: 'createLink',
				unlink: 'unlink',
			}

			const isActive = btn.classList.contains('active')
			clearActive(LinkBtn)
			if (!isActive) btn.classList.add('active')

			document.execCommand(commands[btn.id], false, null)
		})
	})
}

function Align() {
	AlignBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			if (!hasText()) return

			const commands = {
				justifyLeft: 'justifyLeft',
				justifyCenter: 'justifyCenter',
				justifyRight: 'justifyRight',
				justifyFull: 'justifyFull',
			}

			const isActive = btn.classList.contains('active')
			clearActive(AlignBtn)
			if (!isActive) btn.classList.add('active')

			document.execCommand(commands[btn.id], false, null)
		})
	})
}

function Spacing() {
	SpacingBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			if (!hasText()) return

			const commands = { indent: 'indent', outdent: 'outdent' }

			document.execCommand(commands[btn.id], false, null)
		})
	})
}

function FontSize() {
	SelectFontSize.addEventListener('change', event => {
		document.execCommand('fontSize', false, event.target.value)
	})
}

function FontName() {
	SelectFontName.addEventListener('change', event => {
		document.execCommand('fontName', false, event.target.value)
	})
}

function FontColor() {
	FontColorInput.addEventListener('input', () => {
		document.execCommand('foreColor', false, FontColorInput.value)
	})
}

function BackColor() {
	BackColorInput.addEventListener('input', () => {
		document.execCommand('hiliteColor', false, BackColorInput.value)
	})
}

List()
FormatText()
Script()
Arrows()
Link()
Align()
Spacing()
FontSize()
FontName()
FontColor()
BackColor()
